import { CoachingStaff } from "../../../../model/CoachingStaff.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";

export const findSingleCoachingStaffController = asyncHandler(
  async (req, res) => {
    const { id } = req.params;
    if (!id) throw new apiError(400, "id required !!!");

    const staff = await CoachingStaff.findById(id)
      .select("-password")
      .populate("teacherName", "teacherName")
      .populate("CcName", "CcName")
      .populate("subjects", "name className")
    if (!staff) throw new apiError(400, "coaching staff not found !!!");

    const link = {
      teacher: `/teachers/${staff.teacherName._id}`,
    };

    res.status(200).json(new apiResponse(200, {staff, link}));
  },
);
