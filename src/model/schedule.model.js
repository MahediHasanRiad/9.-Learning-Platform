import { Schema, model } from "mongoose";

const scheduleSchema = new Schema({
    startTime: {
        type: String,
        required: true
    },
    endTime: {
        type: String,
        required: true
    }
}, {timestamps: true})

export const Schedule = model('Schedule', scheduleSchema)
