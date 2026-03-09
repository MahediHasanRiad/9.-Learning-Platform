import { Schema, model } from "mongoose";

const staffSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    CcName: {
        type: Schema.Types.ObjectId,
        ref: 'CoachingCenter',
        required: true
    },
    role: {
        type: String,
        enum: ['Admin', 'Manager', 'Teacher', 'Other'],
        default: 'Teacher'
    }
}, {timestamps: true})

export const CoachingStaff = model('CoachingStaff', staffSchema)