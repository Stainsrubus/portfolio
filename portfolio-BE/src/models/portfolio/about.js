import mongoose from "../index.js"
const aboutSchema = new mongoose.Schema({
    imgURL:{type:String,required:true},
    description1:{type:String,required:true},
    description2:{type:String,required:true},
    skills: {
        type: [
          {
            name: { type: String, required: true },
            percentage: { type: Number, required: true, min: 0, max: 100 }, // Added validation for percentage
          },
        ],
        required: true,
      },

})
const aboutModel = mongoose.model("abouts", aboutSchema);
export default aboutModel;