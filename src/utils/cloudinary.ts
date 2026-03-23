import { v2 as cloudinary } from "cloudinary";
import { apiError } from "./apiError.js";
import fs from "fs";

export const cloudinaryFileUpload = async (
  localFilePath: string | undefined,
): Promise<any> => {
  try {
    if (!localFilePath) throw new apiError(404, "File Path not found !!!");

    cloudinary.config({
      cloud_name: process.env.CLOUDINARY_NAME!,
      api_key: process.env.CLOUDINARY_API_KEY!,
      api_secret: process.env.CLOUDINARY_SECRET!,
    });

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    fs.unlinkSync(localFilePath);
    return response;
  } 
  catch (error: any) {
    console.log(error);
    if(fs.existsSync(localFilePath!)){
      fs.unlinkSync(localFilePath!);
    }
    throw new apiError(400, error?.message || "Cloudinary upload failed");
  }
};
