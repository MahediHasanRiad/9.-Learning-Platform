import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { FindStaff } from "../repository/find-staff.repository.js";

export const findSingleCoachingStaffController = asyncHandler(
  async (req, res) => {
    const { id } = req.params;
    if (!id) throw new apiError(400, "id required !!!");

    // check staff exist or not
    const staff = await FindStaff(id)

    // add link
    const link = {
      teacher: `/teachers/${staff.staffId._id}`,
    };

    res.status(200).json(new apiResponse(200, {staff, link}));
  },
);
