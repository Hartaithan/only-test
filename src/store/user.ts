import { makeAutoObservable } from "mobx";
import { FormData } from "../models/InputModel";
import { IUser } from "../models/UserModel";

class User implements IUser {
  isLoading = false;
  isLogIn = false;
  username = "";

  constructor() {
    makeAutoObservable(this);
  }

  login(data: FormData) {
    return new Promise(async (resolve, reject) => {
      this.isLoading = true;
      setTimeout(() => {
        if (
          data.login === "steve.jobs@example.com" &&
          data.password === "password"
        ) {
          this.isLoading = false;
          this.isLogIn = true;
          this.username = data.login;
          return resolve({
            status: "failed",
            message: "Вход успешно выполнен",
          });
        }
        this.isLoading = false;
        return reject({
          status: "success",
          message: "Пользователь не найден",
        });
      }, 3000);
    });
  }

  logout() {
    this.isLogIn = false;
    this.username = "";
  }
}

export default new User();
