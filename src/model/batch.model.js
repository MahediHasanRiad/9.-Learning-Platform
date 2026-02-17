import { Schema, model } from "mongoose";

const batchSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    subjects: {
        type: [Schema.Types.ObjectId],
        ref: 'Subject',
        validate: [arr => arr.length > 0, 'At least one subject required'],
        required: true
    },
    start_date: {
        type: String,
        required: true
    },
    end_date: {
        type: String,
        required: true
    },
    capacity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    assignedTeachers: {
        type: [Schema.Types.ObjectId],
        ref: 'Teacher',
        validate: [arr => arr.length > 0, 'At least one Teacher required'],
        required: true
    },
    recurringRule: {
        type: [String],
        required: true
    },
    CcName: {
        type: Schema.Types.ObjectId,
        ref: 'CoachingCenter',
        required: true
    }
}, {timestamps: true})

export const Batch = model('Batch', batchSchema)