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
        type: Schema.Types.ObjectId,
        ref: 'Subject',
        required: true
    },
    batchId: {
        type: Schema.Types.ObjectId,
        ref: 'Batch'
    },
    teacherId: {
        type: Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true
    },
    status: {
        type: String,
        enum: ['Draft', 'Published'],
        default: 'Draft'
    }
}, {timestamps: true})

export const DemoClass = model('DemoClass', demoClassSchema)

