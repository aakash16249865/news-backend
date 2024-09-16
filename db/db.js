// import mongoose from "mongoose";

// const con=mongoose.createConnection('mongodb://localhost:27017/lsp');
// con.once('open',()=>console.log("database connected"));
// con.on('error',(err)=>console.log(`database not connect:${err.message}`));

// export default con

import mongoose from "mongoose";

const con=mongoose.createConnection('mongodb+srv://aakashofficial2005:GAcJIEDKeXswQ8A6@cluster0.6sv3s.mongodb.net/users?retryWrites=true&w=majority&appName=Cluster0');
con.once('open',()=>console.log("database connected"));
con.on('error',(err)=>console.log(`database not connect:${err.message}`));

export default con