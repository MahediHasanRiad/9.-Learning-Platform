import { Schema, model } from "mongoose";

const staffSchema = new Schema({
    userId: {
        type: Schema.objectId,
        ref: 'User',
        required: true
    },
    teacherId: {
        type: Schema.objectId,
        ref: 'Teacher'
    },
    coachingCenter: {
        type: Schema.objectId,
        ref: 'CoachingCenter',
        required: true
    },
    role: {
        type: String,
        enum: [ADMIN, MANAGER, TEACHER],
        required: true
    },
    subjects: {
        type: [String],
        required: true
    }
}, {timeStamp: true})

export const CoachingStaff = model('CoachingStaff', staffSchema)