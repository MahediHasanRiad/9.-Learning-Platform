import { Schema, model } from "mongoose";

const teacherSchema = new Schema({
    userID: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    bio: {
        type: String
    },
    education: {
        type: [String],
        enum: ['SSC', 'HSC', 'GRADUATION', 'MASTERS'],
        required: true
    },
    certificate: {
        type: [String]
    },
    experienceOfYears: {
        type: Number,
        default: 0
    }
}, {timeStamp: true})

export const Teacher = model('Teacher', teacherSchema)