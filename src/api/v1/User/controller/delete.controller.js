import { User } from "../../../../model/user.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";

const deleteUserController = asyncHandler(async (req, res) => {

    const {id} = req.params 
    if(!id) throw new apiError(400, 'id required !')

    const user = await User.findByIdAndDelete(id)
    if(!user) throw new apiError(404, 'user not found !!!')

    res.status(204).json(new apiResponse(204, [], 'user delete successfully'))

})

export {deleteUserController}