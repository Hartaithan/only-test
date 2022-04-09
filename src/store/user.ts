import { makeAutoObservable } from "mobx";
import { IUser } from "../models/UserModel";

class User implements IUser {
  isLogIn = false;
  username = null;

  constructor() {
    makeAutoObservable(this);
  }
}

export default new User();
