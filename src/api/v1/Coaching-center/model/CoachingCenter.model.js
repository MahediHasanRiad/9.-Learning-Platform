import { Schema, model } from "mongoose";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const coachingCenterSchema = new Schema({
    CcName: {
        type: String,
        required: true
    },
    email:{
        type: String,
        // unique: [true, 'Email Must be Unique or One user Can create One Page !!!'],
        validate: {
            validator: function(v) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
            },
             message: (props) => `${props.value} is not a valid Email !`
        }
    },
    address: {
        type: String,
    },
    mobile: {
        type: Number,
        min: [11, 'Not Valid'],
        validate:{
            validator: function(v){
                return /^01[3-9]\d{8}$/.test(v);
            },
            message: (props) => `${props.value} in not valid Number !!!`
        }
    },
    avatar: {
        type: String,
        
    },
    coverImage: {
        type: String
    },
    website:{
        type: String
    },
    officeTime: {
        type: String,
    },
    bio: {
        type: String,
    },
    subjects: {
        type: [Schema.Types.ObjectId],
        ref: 'Subject',
    },
    facebook: {
        type: String,
    },
    linkedIn: {
        type: String,
    },
    staffs: [{
        type: Schema.Types.ObjectId,
        ref: 'CoachingStaff'
    }],
    batch: [{
        type: Schema.Types.ObjectId,
        ref: 'Batch'
    }],
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status:{
        type: String,
        enum: ['Pending', 'Approved', 'Suspended '],
        default: 'Pending'
    },
    // role: {
    //     type: String,
    //     default: 'Admin'
    // },
    
}, {timestamps: true})


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
            name: this.CcName,
            email: this.email,
            role: this.role
        },
        process.env.ACCESS_TOKEN_SECRET_KEY,
        {expiresIn: process.env.ACCESS_TOKEN_EXPIRE_DATE}
    )
}


export const CoachingCenter = model('CoachingCenter', coachingCenterSchema)