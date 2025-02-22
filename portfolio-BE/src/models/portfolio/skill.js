import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
    skill:{type:String,required:true},
    imgURL:{type:String,required:true},
    certificateImageData:{type:String,required:true},
})
const skillModel = mongoose.model("Skills",skillSchema);
export default skillModel;