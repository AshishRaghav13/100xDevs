const mongoose = require("mongoose");

// connect to mongoDB

mongoose.connect("mongodb+srv://ashishraghav2468:WQi5dE1ChYd5iIAf@cluster0.jlpnbag.mongodb.net/course_selling_app")

// define Schemas

const AdminSchema = new mongoose.Schema({
    username:String,
    password:String
})

const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    purchasedCourses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Course'
    }]
})

const CourseSchema = new mongoose.Schema({
   title: String, 
   description: String, 
   imageLink: String, 
   price : Number
})

const Admin = mongoose.model('Admin',AdminSchema);
const User = mongoose.model('User',UserSchema);
const Course = mongoose.model('Course',CourseSchema);

module.exports = {
    Admin,
    User,
    Course
}