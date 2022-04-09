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
  const { register, control, handleSubmit } = useForm<FormData>({
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

  return (
    <Wrapper onSubmit={handleSubmit(onSubmit)}>
      <Input
        type="text"
        label="Логин"
        name={FormElements.Login}
        register={register}
        required
      />
      <Input
        type="password"
        label="Пароль"
        name={FormElements.Password}
        register={register}
        required
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
