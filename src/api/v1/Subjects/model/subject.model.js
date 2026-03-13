import { Schema, model } from "mongoose";

const subjectSchema = new Schema({
    name: {
        type: String,
        required: true 
    },
    className: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true})

export const Subject = model('Subject', subjectSchema)