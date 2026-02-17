import { Schema, model } from "mongoose";

const studentSchema = new Schema({
    userID: {
        type: Schema.objectId,
        ref: 'User'
    },
    classLevel: {
        type: String,
        required: true
    },
    subjectOfInterest: {
        type: [String],
        required: true
    }
}, {timestamps: true})

export const Student = model('Student', studentSchema)