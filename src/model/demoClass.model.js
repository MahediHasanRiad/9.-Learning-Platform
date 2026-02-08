import { Schema, model } from "mongoose";

const demoClassSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    videoURL: {
        type: String,
        required: true
    },
    subjectId: {
        type: Schema.objectId,
        ref: 'Subject',
        required: true
    },
    batchId: {
        type: Schema.objectId,
        ref: 'Batch'
    },
    teacherId: {
        type: Schema.objectId,
        ref: 'Teacher',
        required: true
    },
    status: {
        type: String,
        enum: ['Draft', 'Published']
    }
}, {timeStamp: true})

export const DemoClass = model('DemoClass', demoClassSchema)

