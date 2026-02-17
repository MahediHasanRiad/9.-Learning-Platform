import { Schema, model } from "mongoose";

const enrollmentSchema = new Schema({
    studentId: {
        type: Schema.objectId,
        ref: 'Student',
        required: true 
    },
    batchId: {
        type: Schema.objectId,
        ref: 'Batch',
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Completed', 'Canceled'],
        default: 'Pending'
    }
}, {timestamps: true})

export const Enrollment = model('Enrollment', enrollmentSchema)