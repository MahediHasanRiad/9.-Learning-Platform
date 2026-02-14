import { User } from "../../../../model/user.model.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { cloudinaryFileUpload } from "../../../../utils/cloudinary.js";
import { LocalFilePath } from "../../../../utils/image_local_File_Path.js";

const updateImageController = asyncHandler(async (req, res) => {

    const avatarLocalPath = LocalFilePath(req, 'avatar')
    const coverImageLocalPath = LocalFilePath(req, 'coverImage', true)

    const avatar = avatarLocalPath ? await cloudinaryFileUpload(avatarLocalPath) : ''
    const coverImage = coverImageLocalPath ? await cloudinaryFileUpload(coverImageLocalPath) : ''

    const user = await User.findById(req.user._id)
    
    user.avatar = avatar.url ? avatar.url : user.avatar
    user.coverImage = coverImage.url ? coverImage.url : user.coverImage
    await user.save()

    res.status(200).json(new apiResponse(200, user, 'update successfully !!!'))
})

export {updateImageController}