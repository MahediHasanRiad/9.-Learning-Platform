import { Schema, model } from "mongoose";

const staffSchema = new Schema({
    staffId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    coachingId: {
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