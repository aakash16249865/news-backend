import jwt from 'jsonwebtoken';
const Createtoken=(data)=>{
    var token=jwt.sign(data,process.env.JWTSECRETKEY,{expiresIn:"2h"})
    return token;
}
const authenticateJWT=(roles)=>(req,res,next)=>{
   try{
    const authHeader = req.headers.authorization;
    if(authHeader){
      const token=authHeader.split(' ')[1]
      jwt.verify(token,process.env.JWTSECRETKEY,(err,user)=>{
        if(err){
            return res.send("Authentication to access");
        }
        console.log(roles)
        if(roles.includes(user.Role)){
            req.user=user;
            next();
        }
        else{
            res.send("Authentication to access"); 
        }
      })
    }
    else{
        res.send("Authentication to access");
    }
   }
   catch(err){
    console.log(err)
   }
}
export {Createtoken,authenticateJWT};