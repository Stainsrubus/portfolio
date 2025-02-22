import express from 'express'
import homeModel from '../models/portfolio/home.js';
import aboutModel from '../models/portfolio/about.js';
import contactModel from '../models/portfolio/contact.js';
import courseModel from '../models/portfolio/courses.js';
import projectModel from '../models/portfolio/projects.js';
import educationModel from '../models/portfolio/education.js';
import skillModel from '../models/portfolio/skill.js';
const router = express.Router()


router.get('/get-portfolio-data',async(req,res)=>
{
try {
    const homes=await homeModel.find();
    const abouts=await aboutModel.find();
    const projects= await projectModel.find();
    const courses=await  courseModel.find();
    const skills=await skillModel.find();
    const contacts=await contactModel.find();
    const educations=await educationModel.find();

console.log("data fetched")
    res.status(200).send({
        homes:homes[0],
        abouts:abouts[0],
        courses:courses,
        contacts:contacts[0],
        projects:projects,
        education:educations,
        skill:skills,
    })
} catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).send('Internal Server Error');
}
})

export default router
