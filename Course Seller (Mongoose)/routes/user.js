const {Router} = require('express')
const router = Router();
const userMiddleware = require("../middleware/user");
const { User, Course } = require('../db');

// User Routes 

router.post('/signup',(req,res)=>{
    username = req.body.username;
    password = req.body.password;

    User.create({
        username,
        password
    })
    res.json({
        message:"User created successfully"
    })
})

router.get('/courses',async (req,res)=>{
    const response = await Course.find({});
    
    res.json({
        courses:response
    })
})

router.post('/courses/:courseId',userMiddleware,(req,res)=>{
    const courseId = req.params.courseId;
    const username = req.headers.username;
    User.updateOne({
        username:username
    },{
        "$push":{
            purchasedCourses:courseId
        }
    }); 
    res.json({
        message:"purchase complete"
    })
})

router.get('/purchasedCourses',userMiddleware,async (req,res)=>{
    const user = await User.findOne({
        username: req.headers.username
    });
    const courses = await Course.find({
        _id: {
            "$in":user.purchasedCourses
        }
    })
    res.json({
        courses:courses
    })
})

module.exports = router