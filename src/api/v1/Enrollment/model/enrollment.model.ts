import { Schema, Types, model, type InferSchemaType } from "mongoose";

const enrollmentSchema = new Schema({
    studentId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true 
    },
    batchId: {
        type: Schema.Types.ObjectId,
        ref: 'Batch',
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Completed', 'Canceled'],
        default: 'Pending'
    }
}, {timestamps: true})

export type EnrolledType = InferSchemaType<typeof enrollmentSchema> & {_id: Types.ObjectId}

export const Enrollment = model<EnrolledType>('Enrollment', enrollmentSchema)