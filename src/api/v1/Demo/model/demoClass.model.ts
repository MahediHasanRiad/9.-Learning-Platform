import { Schema, model, Types, type InferSchemaType } from "mongoose";

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
        ref: 'Batch',
        default: null
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status: {
        type: String,
        enum: ['Draft', 'Published'],
        default: 'Draft'
    }
}, {timestamps: true})

export type DemoClassType = InferSchemaType<typeof demoClassSchema> & {_id: Types.ObjectId}

export const DemoClass = model<DemoClassType>('DemoClass', demoClassSchema)

