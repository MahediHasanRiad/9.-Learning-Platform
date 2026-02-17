import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



const teacherSchema = new Schema({
    teacherName:{
        type: String,
        required: true
    },
    bio: {
        type: String
    },
    email:{
        type: String,
        unique: true,
        required: [true, 'Email Required !!!'],
        validate: {
            validator: function(v) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
            },
             message: (props) => `${props.value} is not a valid Email !`
        }
    },
    mobile: {
        type: Number,
        min: [11, 'Not Valid'],
        required: [true, 'Mobile number required !!!'],
        unique: true,
        validate:{
            validator: function(v){
                return /^(?:\+88|88)?(01[3-9]\d{8})$/.test(v);
            },
            message: (props) => `${props.value} in not valid Number !!!`
        }
    },
    password: {
        type: String,
        minLength: [6, 'Minimum 6 character'],
        required: [true, 'Password Required !!!']
    },
    avatar: {
        type: String,
        required: true
    },
    coverImage: {
        type: String
    },
    role: {
        type: String,
        enum: ['ADMIN', 'TEACHER', 'COACHING-ADMIN', 'COACHING-MANAGER', 'COACHING-TEACHER', 'STUDENT'],
        default: 'TEACHER',
        required: true
    },
    education: {
        type: [String],
        required: true
    },
    certificate: {
        type: [String]
    },
    experienceOfYears: {
        type: Number,
        default: 0
    },
    rating: {
        type: Number,
        default: 0
    }
}, {timeStamp: true})


// hash password
teacherSchema.pre("save", async function (next) {
   try {
     if(!this.isModified("password")) return
 
     this.password = await bcrypt.hash(this.password, 10)
     return next()
   }
    catch (error) {
    console.log(error)
   }
})

// compare password
teacherSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}  


// generate access token
teacherSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            name: this.teacherName,
            email: this.email,
            role: this.role
        },
        process.env.ACCESS_TOKEN_SECRET_KEY,
        {expiresIn: process.env.ACCESS_TOKEN_EXPIRE_DATE}
    )
}


export const Teacher = model('Teacher', teacherSchema)