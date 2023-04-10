import { ISignup } from "../interfaces/signup";
import { IUser } from "../interfaces/user";
import instance from "./instance";

export const signin = (user: IUser) => {
  return instance.post("/signin", user);
};

export const signup = (signup: ISignup) => {
  return instance.post("/signup", signup);
};
