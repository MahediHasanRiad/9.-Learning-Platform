import { Schema, Types, model, type InferSchemaType } from "mongoose";

const staffSchema = new Schema({
    staffId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    coachingId: {
        type: Schema.Types.ObjectId,
        ref: 'CoachingCenter',
        required: true
    },
    role: {
        type: String,
        enum: ['Admin', 'Manager', 'Teacher', 'Other'],
        default: 'Teacher'
    }
}, {timestamps: true})

export type CoachingStaffType = InferSchemaType<typeof staffSchema> & {_id: Types.ObjectId}
export const CoachingStaff = model('CoachingStaff', staffSchema)