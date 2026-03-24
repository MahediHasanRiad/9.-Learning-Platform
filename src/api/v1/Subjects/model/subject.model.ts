import { Schema, Types, model, type InferSchemaType } from "mongoose";

const subjectSchema = new Schema({
    name: {
        type: String,
        required: true 
    },
    className: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
}, {timestamps: true})

export type SubjectType = InferSchemaType<typeof subjectSchema> & {_id: Types.ObjectId}
export const Subject = model('Subject', subjectSchema)