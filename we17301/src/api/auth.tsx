import { IUser } from "../interfaces/user"
import instance from "./instance"

export const signin = (user:IUser) => {
    return instance.post("/signin", user)
}