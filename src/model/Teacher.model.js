import { Schema, model } from "mongoose";

const teacherSchema = new Schema({
    userID: {
        type: Schema.objectId,
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
        type: [string]
    },
    experienceOfYears: {
        type: Number,
        default: 0,
        required: true
    }
}, {timeStamp: true})

export const Teacher = model('Teacher', teacherSchema)