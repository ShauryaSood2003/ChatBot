import axios from "axios"

const url="http://localhost:8000"

export const askBot=async(data)=>{
    try{
        const response=await axios.get({url}+"/getMessage",data)
        return response.data
    }catch(error){
        console.log("this error : "+error);
    }
}