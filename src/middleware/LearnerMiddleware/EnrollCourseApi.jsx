import { FETCH_LEARNER_COURSE, fetchenrollsuccess } from "../../actions/LearnerAction/EnrolledCourseAction";
import axios from "axios";

const enrollCourseApi=({dispatch})=>(next)=>async(action)=>{
    if(action.type===FETCH_LEARNER_COURSE){
        try{
            console.log("Enrolll course",action.payload);
            const response= await axios.get(`http://localhost:5199/lxp/enroll/${action.payload}/course/topic`);
            
            // console.log(`http://localhost:5199/lxp/enroll/${action.payload}/course/topic`)

            // http://localhost:5199/lxp/enroll/2ce7b837-ec9b-40d2-aa76-567319c8fc02/course/topic
          
            console.log('courselist',response.data.data[0].enrollmentId);
            sessionStorage.setItem("enrolled", response.data.data[0].enrollmentId);
            

            dispatch(fetchenrollsuccess(response.data.data));
           
        }
        catch(error){
            console.log(error);
        }
    }
    return next(action)
}

export default enrollCourseApi;