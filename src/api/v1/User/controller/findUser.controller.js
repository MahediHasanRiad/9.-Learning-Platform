import { User } from "../../../../model/user.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";

const findUserController = asyncHandler(async(req, res) => {
    /**
     * get id = req.params
     * if(!id) return error
     * find user by id
     * res user
     */

    const {id} = req.params 
    if(!id) throw new apiError(400, 'id required !!!')

    const user = await User.findById(id).select("-password")
    if(!user) throw new apiError(404, 'user not found !!!')
    
    res.status(200).json(new apiResponse(200, user))
})

export {findUserController}