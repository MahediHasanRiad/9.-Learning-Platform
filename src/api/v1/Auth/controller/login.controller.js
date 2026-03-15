import { apiError } from "../../../../utils/apiError.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { Responses } from "../utils/response.js";
import { verifyUser } from "../utils/user.js";



const logInController = asyncHandler(async (req, res) => {
  
  const { email, password } = req.body;

  if (!email || !password)
    throw new apiError(400, "Email & Password both are required !!!");

  // get user data, and accesstoken
  const {user, accessToken} = await verifyUser(email, password)

  // set cookies and response data
  Responses(res, user, accessToken)

});

export { logInController };
