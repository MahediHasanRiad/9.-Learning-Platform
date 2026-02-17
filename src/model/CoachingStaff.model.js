import { Schema, model } from "mongoose";

const staffSchema = new Schema({
    // userId: {
    //     type: Schema.Types.ObjectId,
    //     ref: 'User',
    //     required: true
    // },
    teacherName: {
        type: Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true
    },
    CcName: {
        type: Schema.Types.ObjectId,
        ref: 'CoachingCenter',
        required: true
    },
    role: {
        type: String,
        enum: ['ADMIN', 'MANAGER', 'TEACHER'],
        required: true
    },
    subjects: [{
        type: Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    }]
}, {timestamps: true})

export const CoachingStaff = model('CoachingStaff', staffSchema)