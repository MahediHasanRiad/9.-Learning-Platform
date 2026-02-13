import { v2 as cloudinary } from "cloudinary";
import { apiError } from "../utils/apiError.js";

export const cloudinaryFileUpload = async (localFilePath) => {
  try {
    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_SECRET,
    });

    const response = await cloudinary.uploader
      .upload(localFilePath, {
        resource_type: "auto",
      })
      .catch((error) => {
        console.log(error);
      });

    return response;
  } 
  catch (error) {
    new apiError(400, error.message);
  }
};
