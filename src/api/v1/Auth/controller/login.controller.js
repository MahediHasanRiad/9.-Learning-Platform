import { Teacher } from "../../../../model/Teacher.model.js";
import { User } from "../../../../model/user.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { generateToken } from "../../../../utils/generateAccessToken.js";
import { Responses } from "../utils/response.js";
import { verifyTeacher } from "../utils/teacher.js";
import { verifyUser } from "../utils/user.js";

const logInController = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const { as = "student" } = req.query;

  if (!email || !password)
    throw new apiError(400, "Email & Password both are required !!!");

  if (as === "student") {
    const {student, accessToken} = await verifyUser(email, password)
    Responses(res, student, accessToken)
  }
  if (as === "teacher") {
    const {teacher, accessToken} = await verifyTeacher(email, password)
    Responses(res, teacher, accessToken)
  }
  // if (as === "coaching") {
  //   TODO:
  // }
});

export { logInController };
