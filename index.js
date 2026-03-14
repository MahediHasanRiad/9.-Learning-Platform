import express from "express";
import mongoose from "mongoose";
import Yaml from "yamljs";
import swaggerUiExpress from "swagger-ui-express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { userRouter } from "./src/api/v1/User/router/user.router.js";
import { teacherRouter } from "./src/api/v1/Teacher/router/teacher.router.js";
import { subjectRouter } from "./src/api/v1/Subjects/router/subject.router.js";
import { coachingCenterRouter } from "./src/api/v1/Coaching-center/router/coaching_center.router.js";
import { coachingStaffRouter } from "./src/api/v1/Coaching-staff/router/coaching_staff.router.js";
import { batchRouter } from "./src/api/v1/Batch/router/batch.router.js";
import { demoClassRouter } from "./src/api/v1/Demo/router/demoClass.router.js";
import { enrollmentRouter } from "./src/api/v1/Enrollment/router/enrollment.router.js";
import { authRouter } from "./src/api/v1/Auth/router/auth.router.js";

const app = express();
const swaggerDocs = Yaml.load("./swagger.yaml");
dotenv.config({ path: "./src/config/.env" });

// middleware
const allowedOrigins = [
  "http://localhost:5173",
  "https://learning-platform-gilt.vercel.app"
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use("/docs", swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocs));
app.use(cookieParser());

// routers
app.use("/api/v1", authRouter);
app.use("/api/v1", userRouter);
app.use("/api/v1", teacherRouter);
app.use("/api/v1", subjectRouter);
app.use("/api/v1", coachingCenterRouter);
app.use("/api/v1", coachingStaffRouter);
app.use("/api/v1", batchRouter);
app.use("/api/v1", demoClassRouter);
app.use("/api/v1", enrollmentRouter);

app.get("/health", (_req, res) => {
  res.send("this is health route !!!");
});

// database connection
mongoose
  .connect(`${process.env.DB_URL}/${process.env.DB_NAME}`)
  // .connect(`${process.env.DB_URL_LOCALHOST}/${process.env.DB_NAME}`)
  .then(() => {
    console.log("Database connected !");

    app.listen(3000, () => {
      console.log("server in on...");
    });
  })
  .catch((e) => {
    console.log(e);
  });
