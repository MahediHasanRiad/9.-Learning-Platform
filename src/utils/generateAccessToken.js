import { User } from "../model/user.model.js"


async function generateToken(id){
    try {
        const user = await User.findById(id)
        const accessToken = await user.generateAccessToken(id) 

        return {
            accessToken
        }

    } catch (error) {
        console.log(error)
    }
}


export {generateToken}