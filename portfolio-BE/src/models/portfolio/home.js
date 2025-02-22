import mongoose from "mongoose";
const homeSchema = new mongoose.Schema(
  {
    welcomeText: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    caption: { type: String, required: true },
    description: { type: Array, required: true },
    imgURL:{type:String, required:true},
  }
);

const homeModel = mongoose.model("homes", homeSchema);
export default homeModel;
