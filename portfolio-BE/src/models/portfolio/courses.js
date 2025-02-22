import mongoose from "mongoose";
const courseSchema = new mongoose.Schema({
    imgURL:{type:String,required:true},
    title:{type:String,required:true},
    skillsgained:{type:String,required:true},
    period:{type:String,required:true},
    certifiedby:{type:String,required:true},

})
const courseModel = mongoose.model("courses", courseSchema);
export default courseModel;