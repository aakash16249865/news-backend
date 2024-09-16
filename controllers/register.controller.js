// import User from "../models/usersmodel.js"

// const findUser = async(email) => {
//     try {
//         var resdata= await User.findOne({email:email})
//         return resdata;
//     } catch (error) {
//         console.log(error);
        
//     }

// }





// const userregister = async(req,res) =>{

//    try {

//     var checkuser= await findUser (req.body.email);
//     if (checkuser==null) {
//         const {password, ...otherdatas}=req.body;
//         const haspass= await bcrypt.hash(password,10);
//         const resdata= new User({...otherdatas,password:haspass}).save();
//         if (resdata) {
//             res.send({status:"successfully registered"});
            
//         }
//         else{
//             res.send({status:"failed to register"});
//         }
        
//     }
    
//    } catch (error) {
//          console.log(error);
//    } 
// }
// export default userregister;

import bcrypt from 'bcryptjs';

import User from '../models/usersmodel.js';

const findUser = async (email) => {
    try {
        const resdata = await User.findOne({ email });
        return resdata;
    } catch (error) {
        console.log(error);
        return null;
    }
};

const userregister = async (req, res) => {
    try {
        const { email, password, ...otherdatas } = req.body;
        
        // Check if required fields are missing
        if (!email || !password) {
            return res.status(400).send({ status: 'Email and password are required' });
        }

        // Check if user already exists
        const checkuser = await findUser(email);
        if (checkuser !== null) {
            return res.status(400).send({ status: 'User already exists' });
        }

        // Hash password and save user
        const haspass = await bcrypt.hash(password, 10);
        const newUser = new User({ ...otherdatas, email, password: haspass });

        const resdata = await newUser.save();
        if (resdata) {
            return res.status(201).send({ status: 'Successfully registered' });
        } else {
            return res.status(500).send({ status: 'Failed to register' });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).send({ status: 'Server error' });
    }
};

export default userregister;
