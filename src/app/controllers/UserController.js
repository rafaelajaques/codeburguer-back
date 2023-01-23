import {v4} from 'uuid'
import User from '../models/User'

class UserController{
    async store (request, response){
        const { name, email, password_hash, admin} = body.request

        const user = ({
            id: v4(),
            name,
            email,
            password_hash,
            admin,
        })

        return response.json(user)
    }
}

export default new UserController()