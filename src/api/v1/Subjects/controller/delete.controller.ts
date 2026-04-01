import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import type { Request, Response } from "express";
import { prisma } from "../../../../lib/prisma.js";

export const deleteSubjectController = asyncHandler(async(req: Request, res: Response) => {
    
    const id = req.params.id as string
    if(!id) throw new apiError(400, 'id not found !!!')

    await prisma.subject.delete({where: {id: id}})

    res.status(204).json(new apiResponse(204, {}, 'Delete successfully !'))
})