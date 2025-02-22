import mongoose from "mongoose";
const educationSchema = new mongoose.Schema({
    Education:{type:String,required:true},
    Institute_Name:{type:String,required:true},
    Year_of_Passing:{type:String,required:true},
    Percentage:{type:String,required:true},
    University:{type:String},
    Stream:{type:String},
    imgURL:{type:String,required:true},
})
const educationModel = mongoose.model("educations", educationSchema);
export default educationModel;