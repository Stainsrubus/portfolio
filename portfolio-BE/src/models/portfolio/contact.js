import mongoose from "mongoose";
const contactSchema = new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    mobile:{type:String,required:true},
    qualification:{type:String,required:true},
    gender:{type:String,required:true},
   
})
const contactModel = mongoose.model("contacts", contactSchema);
export default contactModel;