import { Teacher } from "../../../../model/Teacher.model.js"


async function generateTeacherAccessToken(id){
    try {
        const user = await Teacher.findById(id)
        const accessToken = await user.generateAccessToken(id) 

        return {
            accessToken
        }

    } catch (error) {
        console.log(error)
    }
}


export {generateTeacherAccessToken}