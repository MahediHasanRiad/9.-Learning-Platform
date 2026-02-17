import express from "express";
import mongoose from "mongoose";
import Yaml from "yamljs";
import swaggerUiExpress from "swagger-ui-express";
import dotenv from "dotenv";
import { userRouter } from "./src/router/user.router.js";
import cookieParser from "cookie-parser";
import { teacherRouter } from "./src/router/teacher.router.js";
import { subjectRouter } from "./src/router/subject.router.js";
import { coachingCenterRouter } from "./src/router/coaching_center.router.js";
import { coachingStaffRouter } from "./src/router/coaching_staff.router.js";
import { batchRouter } from "./src/router/batch.router.js";
import { demoClassRouter } from "./src/router/demoClass.router.js";
import { enrollmentRouter } from "./src/router/enrollment.router.js";

const app = express();
const swaggerDocs = Yaml.load("./swagger.yaml");
dotenv.config({ path: "./.env" });


// middleware
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use("/docs", swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerDocs));
app.use(cookieParser())

// routers
app.use('/api/v1', userRouter )
app.use('/api/v1', teacherRouter )
app.use('/api/v1', subjectRouter )
app.use('/api/v1', coachingCenterRouter )
app.use('/api/v1', coachingStaffRouter )
app.use('/api/v1', batchRouter)
app.use('/api/v1', demoClassRouter)
app.use('/api/v1', enrollmentRouter)

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
