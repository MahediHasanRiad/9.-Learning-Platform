import { Schema, Types, model, type InferSchemaType } from "mongoose";

const teacherSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    education: {
      type: String,
      required: true,
    },
    certificate: {
      type: String,
    },
    experience: {
      type: String,
      default: "0 years of experience",
    },
    availableDay: {
      type: String,
      default: "00-00-2000",
    },
    availableTime: {
      type: String,
      default: "00:00am - 00:00am",
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

export type TeacherType = InferSchemaType<typeof teacherSchema> & { _id: Types.ObjectId };
export const Teacher = model<TeacherType>("Teacher", teacherSchema);
