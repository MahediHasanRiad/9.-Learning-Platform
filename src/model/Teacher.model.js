import { Schema, model } from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const teacherSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    education: {
      type: String,
      required: true,
    },
    certificate: {
      type: [String],
    },
    experience: {
      type: String,
      default: "",
    },
    availableDay: {
      type: String,
      default: ''
    },
    availableTime: {
      type: String,
      default: ''
    },
    rating: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true },
);

// hash password
teacherSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) return;

    this.password = await bcrypt.hash(this.password, 10);
    return next();
  } catch (error) {
    console.log(error);
  }
});

// compare password
teacherSchema.methods.isPasswordCorrect = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// generate access token
teacherSchema.methods.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      name: this.teacherName,
      email: this.email,
      role: this.role,
    },
    process.env.ACCESS_TOKEN_SECRET_KEY,
    { expiresIn: process.env.ACCESS_TOKEN_EXPIRE_DATE },
  );
};

export const Teacher = model("Teacher", teacherSchema);
