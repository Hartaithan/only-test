import React from "react";
import styled from "styled-components";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import Input from "./Input";
import { FormElements, FormData } from "../models/InputModel";
import SubmitButton from "./SubmitButton";
import Checkbox from "./Checkbox";
import user from "../store/user";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 640px;
`;

const Form: React.FC = () => {
  const { isLoading } = user;
  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({
    defaultValues: {
      login: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.info("payload", data);
    user
      .login(data)
      .then((res) => {
        console.log(res);
        navigate("/profile");
      })
      .catch((error) => {
        console.error("login:", error);
      });
  };

  React.useEffect(() => {
    console.log(errors);
    console.log(errors ? "есть" : "нет");
  }, [errors]);

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        label="Логин"
        name={FormElements.Login}
        register={register}
        errors={errors.login}
        validation={{
          required: { value: true, message: "Обязательное поле" },
          minLength: { value: 5, message: "Минимальная длина 5 символов" },
        }}
      />
      <Input
        type="password"
        label="Пароль"
        name={FormElements.Password}
        register={register}
        errors={errors.password}
        validation={{
          required: { value: true, message: "Обязательное поле" },
          minLength: { value: 8, message: "Минимальная длина 8 символов" },
          maxLength: { value: 20, message: "Максимальная длина 20 символов" },
        }}
      />
      <Controller
        name={FormElements.Remember}
        control={control}
        render={({ field }) => (
          <Checkbox
            label="Запомнить пароль"
            onChange={(e) => field.onChange(e.target.checked)}
            checked={field.value}
          />
        )}
      />
      <SubmitButton disabled={isLoading}>Войти</SubmitButton>
    </Wrapper>
  );
};

export default observer(Form);
