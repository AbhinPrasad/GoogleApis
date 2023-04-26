import dotenv from "dotenv"
dotenv.config()

export const uploadFile = async(req,res)=>{
    // console.log(req.user);
    console.log(req.file);
    
}