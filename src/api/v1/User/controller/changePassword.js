import { User } from "../../../../model/user.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";

const changePasswordController =  asyncHandler(async (req, res) => {
    const {oldPassword, newPassword} = req.body 

    if(!oldPassword || !newPassword) throw new apiError(400, 'old and new password both are required !!!')
    
    const user = await User.findById(req.user._id)
    if(!user) throw new apiError(400, 'invelid token !!!')
    
    const verifyPassword = await user.isPasswordCorrect(oldPassword) 
    if(!verifyPassword) throw new apiError(400, 'password not matched !!!')

    user.password = newPassword
    await user.save()

    res.status(200).json(new apiResponse(200, user))
})

export {changePasswordController}