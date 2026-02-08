import { Schema, model } from "mongoose";

const batchSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    subjects: {
        type: [String],
        required: true
    },
    scheduleId: {
        type: Schema.objectId,
        ref: 'Schedule',
        required: [true, 'Schedule time required']
    },
    capacity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    assignedTeachersId: {
        type: [String],
        required: true
    },
    recurringRule: {
        type: [String],
        required: true
    }
}, {timeStamp: true})

export const Batch = model('Batch', batchSchema)