import axios from "axios"
import { IReqLogin, IResUsers } from "../models/user.interface"


export const login = async (username:string, password:string) => {
    const data:IReqLogin = {
        email: username,
        password
    }
    const users: IResUsers = await axios.post('https://reqres.in/api/login', data)
    console.info(username,password,users)
  
}

