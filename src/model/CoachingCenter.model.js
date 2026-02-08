import { Schema, model } from "mongoose";

const coachingCenterSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    street: {
        type: String,
        required: true
    },
    city: {
        type: String,
        enum: ['Mirpur', 'Uttora'],
        required: true
    },
    country: {
        type: String,
        required: true
    },
    website:{
        type: String
    },
    subjects: {
        type: [String],
        required: true
    },
    teachersID: {
        type: [Schema.objectId],
        ref: 'Teacher'
    },
    status:{
        type: String,
        enum: ['Pending', 'Approved', 'Suspended ']
    }
}, {timeStamp: true})

export const CoachingCenter = model('CoachingCenter', coachingCenterSchema)