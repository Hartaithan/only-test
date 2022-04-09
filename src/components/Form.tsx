import React from "react";
import styled from "styled-components";
import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import Input from "./Input";
import { FormElements, FormData } from "../models/InputModel";
import SubmitButton from "./Button";

const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 640px;
`;

const Form: React.FC = () => {
  const { register, handleSubmit } = useForm<FormData>();

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
      <SubmitButton>Войти</SubmitButton>
    </Wrapper>
  );
};

export default Form;