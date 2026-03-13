import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { FindUserThenDelete } from "../repository/find-user-and-delete.repository.js";

const deleteUserController = asyncHandler(async (req, res) => {

    const {id} = req.params 
    if(!id) throw new apiError(400, 'id required !')

    // delete user
    await FindUserThenDelete(id)

    res.status(204).json(new apiResponse(204, [], 'user delete successfully'))

})

export {deleteUserController}