

import bcrypt from 'bcryptjs';

import User from "../models/usersmodel.js";
import { Createtoken } from "../services/jwt/token.js";


const logiregister = async(req,res) =>{

   try {
      var {email,password}=req.body;
     var resdata=await User.findOne({email}).lean();
     if(!resdata){
        return res.send({status:"login failed"})

     }
     const verifypass=await bcrypt.compare(password,resdata.password);
     if(verifypass==true){
        var token=Createtoken({email:resdata.email,password:resdata.password,Role:resdata.Role})
        res.send({status:"sucessfully login",token:token})
     }
     else{
        res.send({status:"login failed"})
     }


   
    
   } catch (error) {
         console.log(error);
   } 
}
export default logiregister;