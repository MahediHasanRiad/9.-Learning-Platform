import { Schema, Types, model, type InferSchemaType } from "mongoose";

const coachingCenterSchema = new Schema({
    CcName: {
        type: String,
        required: true
    },
    email:{
        type: String,
        validate: {
            validator: function(v: any) {
                return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(v);
            },
             message: (props: any) => `${props.value} is not a valid Email !`
        }
    },
    address: {
        type: String,
    },
    mobile: {
        type: Number,
        min: [11, 'Not Valid'],
        validate:{
            validator: function(v: any){
                return /^01[3-9]\d{8}$/.test(v);
            },
            message: (props: any) => `${props.value} in not valid Number !!!`
        }
    },
    avatar: {
        type: String,
        
    },
    coverImage: {
        type: String
    },
    website:{
        type: String
    },
    officeTime: {
        type: String,
    },
    bio: {
        type: String,
    },
    subjects: {
        type: [Schema.Types.ObjectId],
        ref: 'Subject',
    },
    facebook: {
        type: String,
    },
    linkedIn: {
        type: String,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    status:{
        type: String,
        enum: ['Pending', 'Approved', 'Suspended '],
        default: 'Pending'
    },
    
}, {timestamps: true})


export type CoachingCenterType = InferSchemaType<typeof CoachingCenter> & {_id: Types.ObjectId}
export const CoachingCenter = model('CoachingCenter', coachingCenterSchema)