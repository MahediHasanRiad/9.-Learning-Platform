import { CoachingCenter } from "../../../../model/CoachingCenter.model.js"


async function generateCoachingAccessToken(id){
    try {
        const user = await CoachingCenter.findById(id)
        const accessToken = await user.generateAccessToken(id) 

        return {
            accessToken
        }

    } catch (error) {
        console.log(error)
    }
}


export {generateCoachingAccessToken}