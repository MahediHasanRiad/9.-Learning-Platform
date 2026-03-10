import { CoachingCenter } from "../../../../model/CoachingCenter.model.js";
import { CoachingStaff } from "../../../../model/CoachingStaff.model.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";

export const coachingAllStaffController = asyncHandler(async (req, res) => {
  const { search } = req.query;

  const coaching = await CoachingCenter.findOne({ userId: req.user._id });
  if (!coaching) throw new apiError("Does not have any coaching center !");

  const allStaff = await CoachingStaff.aggregate([
  {
    $match: {
      coachingId: coaching._id,
      role: { $regex: search, $options: "i" },
    },
  },
  {
    $lookup: {
      from: "users",
      localField: "staffId",
      foreignField: "_id",
      as: "staffDetails",
    },
  },
  {
    $lookup: {
      from: 'coachingcenters',
      localField: 'coachingId',
      foreignField: '_id',
      as: 'coachingInfo'
    }
  },
  { $unwind: "$staffDetails" },
  { $unwind: "$coachingInfo" }, 
  {
    $project: {
      _id: 1,
      role: 1,
      name: "$staffDetails.name",
      avatar: "$staffDetails.avatar",

      coachingId: "$coachingInfo._id",
      CcName: "$coachingInfo.CcName", 

    },
  },
]);
  if (!allStaff) throw new apiError("No staff added !");

  res.status(200).json(new apiResponse(200, allStaff));
});
