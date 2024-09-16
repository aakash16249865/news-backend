import mongoose from "mongoose";

const con=mongoose.createConnection('mongodb://localhost:27017/lsp');
con.once('open',()=>console.log("database connected"));
con.on('error',(err)=>console.log(`database not connect:${err.message}`));

export default con