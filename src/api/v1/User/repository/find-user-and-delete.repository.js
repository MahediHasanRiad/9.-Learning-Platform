import { apiError } from "../../../../utils/apiError.js"
import { User } from "../model/user.model.js"


export const FindUserThenDelete = async (id) => {
  try {
    const user = await User.findByIdAndDelete(id)
    if(!user) throw new apiError(404, 'user not found !!!')
  } 
catch (error) {
    throw new apiError(404, error)
  }
}