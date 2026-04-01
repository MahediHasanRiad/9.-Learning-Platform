import { prisma } from "../../../../lib/prisma.js";
import { apiError } from "../../../../utils/apiError.js";


export const FindUser = async (id: string) => {
  try {
    // const user = await User.findById(id);
    const user = await prisma.user.findUnique({
      where: { id: id },
      select: {
        id: true,
        name: true,
        email: true,
        mobile: true,
        avatar: true,
        coverImage: true,
        address: true,
        bio: true,
        facebook: true,
        linkedIn: true,
        password: true,
      },
    });
    if (!user) throw new apiError(404, "User not Found !!!");

    return user;
  } catch (error) {
    console.log("Find User Error", error);
  }
};
