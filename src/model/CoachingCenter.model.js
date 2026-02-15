import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const coachingCenterSchema = new Schema({
    name: {
        type: String,
        required: true
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
    password: {
        type: String,
        minLength: [6, 'Minimum 6 character'],
        required: [true, 'Password Required !!!']
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        enum: ['Mirpur', 'Uttora'],
        required: true
    },
    country: {
        type: String,
        required: true
    },
    contact: {
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
    avatar: {
        type: String,
        required: true
    },
    coverImage: {
        type: String
    },
    website:{
        type: String
    },
    subjects: {
        type: [Schema.Types.ObjectId],
        ref: 'Subject',
        required: true
    },
    teachersID: {
        type: [Schema.Types.ObjectId],
        ref: 'Teacher'
    },
    status:{
        type: String,
        enum: ['Pending', 'Approved', 'Suspended '],
        default: 'Pending'
    }
}, {timeStamp: true})


// hash password
coachingCenterSchema.pre("save", async function (next) {
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
coachingCenterSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password)
}  


// generate access token
coachingCenterSchema.methods.generateAccessToken = function () {
    return jwt.sign(
        {
            _id: this._id,
            name: this.name,
            email: this.email
        },
        process.env.ACCESS_TOKEN_SECRET_KEY,
        {expiresIn: process.env.ACCESS_TOKEN_EXPIRE_DATE}
    )
}


export const CoachingCenter = model('CoachingCenter', coachingCenterSchema)