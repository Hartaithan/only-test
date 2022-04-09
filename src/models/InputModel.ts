import { UseFormRegister } from "react-hook-form";

export enum FormElements {
  Login = "login",
  Password = "password",
}

export type FormData = {
  login: FormElements.Login;
  password: FormElements.Password;
};

export interface IInputProps {
  type: string;
  label: string;
  name: typeof FormElements[keyof typeof FormElements];
  register: UseFormRegister<FormData>;
  required: boolean;
}
