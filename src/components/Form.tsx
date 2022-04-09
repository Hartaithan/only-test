import React from "react";
import styled from "styled-components";
import {
  useForm,
  SubmitHandler,
  Controller,
  FieldValues,
} from "react-hook-form";
import Input from "./Input";
import { FormElements, FormData } from "../models/InputModel";
import SubmitButton from "./SubmitButton";
import Checkbox from "./Checkbox";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 640px;
`;

const Form: React.FC = () => {
  const { register, control, handleSubmit } = useForm<FormData>({
    defaultValues: {
      login: "",
      password: "",
      remember: false,
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
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
      <SubmitButton>Войти</SubmitButton>
    </Wrapper>
  );
};

export default Form;
