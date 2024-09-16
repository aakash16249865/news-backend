import User from "../models/usersmodel.js"

const finduserby=async(email)=>{
    try {
        var resdata=await User.findOne({email:email})
        return resdata;

    } catch (error) {
        console.log(error)
    }
}

const getallusers=async (req,res) =>{
    try {
        var user=await finduserby(req.user.email)
        var cond=user.Role=="user"?{}:{email:user.email};
        var resdata=await User.find(cond);
        res.send(resdata);
    } catch (error) {
        console.log(error)
    }
    
}
export default getallusers;