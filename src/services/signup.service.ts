import axios from "axios"
import { IResNewUser, IReqLogin } from "../models/user.interface"

export const signup = async (username:string, password:string) => {
    const data:IReqLogin = {
        email: username,
        password
    }
    const users: IResNewUser = await axios.post('https://reqres.in/api/register', data)
    console.info(username,password,users)
  
}