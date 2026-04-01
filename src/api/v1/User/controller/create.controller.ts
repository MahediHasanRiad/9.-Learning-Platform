import { asyncHandler } from "../../../../utils/asyncHandler.js";
import { apiError } from "../../../../utils/apiError.js";
import { apiResponse } from "../../../../utils/apiResponse.js";
import { cloudinaryFileUpload } from "../../../../utils/cloudinary.js";
import { LocalFilePath } from "../../../../utils/image_local_File_Path.js";
import { User } from "../model/user.model.js";
import { ExistUser } from "../repository/exist-user-by-email.repository.js";
import { CreateUser } from "../repository/create-user.repository.js";
import type { userType } from "../user-types.js";
import type { Request, Response } from "express";
import { prisma } from "../../../../lib/prisma.js";

export const createUserController = asyncHandler(
  async (req: Request, res: Response) => {
    /**
     * get {name, email, password, mobile, avatar, coverImage, role} = req.body
     * if(empty) return error
     * if(exist) = email
     * return exist user
     * image upload in cloudinary
     * create user
     * res
     */

    const { name, email, password, mobile, address, bio } =
      req.body as userType;

    if ([name, email, password, mobile].some((item) => item === "")) {
      throw new apiError(400, "all field are required !!!");
    }

    // check user exist or not
    await ExistUser(email);

    // check image path
    const avaterLocalPath = LocalFilePath(req, "avatar", true);
    const coverImageLocalPath = LocalFilePath(req, "coverImage");

    if (!avaterLocalPath)
      throw new apiError(400, "Avatar local file not found !!!");

    // upload image in cloudinary
    const avatar = await cloudinaryFileUpload(avaterLocalPath);
    const coverImage = coverImageLocalPath
      ? await cloudinaryFileUpload(coverImageLocalPath)
      : "";

    // create
    const createUser = await CreateUser({
      name,
      email,
      mobile,
      password,
      avatar,
      coverImage,
      address,
      bio,
    });

    if (!createUser) throw new apiError(500, "server error during create user");

    // remove password
    const user = await prisma.user.findUnique({
      where: { id: createUser?.id },
      select: {
        id: true,
        name: true,
        email: true,
        mobile: true,
        password: true,
        avatar: true,
        coverImage: true,
        address: true,
        bio: true,
      }
    });

    if (!user) throw new apiError(500, "user not created !!!");

    // add self link
    const link = {
      self: `/users/${user.id}`,
    };

    res
      .status(201)
      .json(new apiResponse(201, { user, link }, "successfully created !"));
  },
);
