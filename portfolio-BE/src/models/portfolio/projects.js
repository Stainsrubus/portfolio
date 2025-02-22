import mongoose from "mongoose";
const projectSchema = new mongoose.Schema({
    imgURL:{type:String,required:true},
    title:{type:String,required:true},
    description:{type:String,required:true},
    technologies:{type:Array,required:true}
})
const projectModel = mongoose.model("projects", projectSchema);
export default projectModel;