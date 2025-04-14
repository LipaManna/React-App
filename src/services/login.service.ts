import axios from "axios"
import { IUsers } from "../models/user.interface"


export const login = async (username:string, password:string) => {
    const users: IUsers[] = await axios.get('https://api.escuelajs.co/api/v1/users')
    console.info(username,password,users)
    const userFound = users.find((eachUser) => eachUser.email === username && eachUser.password === password);
    if(userFound) {
        return {
            msgId: 200,
            msg: "Login Successfull!",
            data: userFound
        }
    } else {
        return {
            msgId: 401,
            msg: "User not found!",
            data: userFound
        }
    }
}

