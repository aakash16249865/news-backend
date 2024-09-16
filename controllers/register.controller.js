import User from "../models/usersmodel.js"
import bcrypt from 'bcrypt';
const findUser = async(email) => {
    try {
        var resdata= await User.findOne({email:email})
        return resdata;
    } catch (error) {
        console.log(error);
        
    }

}





const userregister = async(req,res) =>{

   try {

    var checkuser= await findUser (req.body.email);
    if (checkuser==null) {
        const {password, ...otherdatas}=req.body;
        const haspass= await bcrypt.hash(password,10);
        const resdata= new User({...otherdatas,password:haspass}).save();
        if (resdata) {
            res.send({status:"successfully registered"});
            
        }
        else{
            res.send({status:"failed to register"});
        }
        
    }
    
   } catch (error) {
         console.log(error);
   } 
}
export default userregister;