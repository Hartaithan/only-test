import { UseFormRegister, FieldError, RegisterOptions } from "react-hook-form";

export enum FormElements {
  Login = "login",
  Password = "password",
  Remember = "remember",
}

export type FormData = {
  login: string;
  password: string;
  remember: boolean;
};

export interface IInputProps {
  type: string;
  label: string;
  name: typeof FormElements[keyof typeof FormElements];
  register: UseFormRegister<FormData>;
  errors: FieldError | undefined;
  validation?: RegisterOptions;
}

export interface IControlProps {
  type: string;
  errors: FieldError | undefined;
}
