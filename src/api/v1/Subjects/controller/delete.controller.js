import { Subject } from "../../../../model/subject.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";

export const deleteSubjectController = asyncHandler(async(req, res) => {
    const {id} = req.params 
    if(!id) throw new apiError(400, 'id not found !!!')

    await Subject.findByIdAndDelete(id)

    res.status(204).json(new apiResponse(204, {}, 'Delete successfully !'))
})