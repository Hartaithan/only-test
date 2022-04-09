import React from "react";
import styled from "styled-components";
import { IControlProps, IInputProps } from "../models/InputModel";

const Group = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-bottom: 32px;
  }
`;

const Label = styled.label`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #1f1f1f;
  margin-bottom: 10px;
`;

const Control = styled.input.attrs((props: IControlProps) => ({
  type: props.type,
}))`
  height: 60px;
  width: 100%;
  border: ${(props: IControlProps) =>
    props.errors ? "1px solid #E26F6F" : "1px solid transparent"};
  background: #f5f5f5;
  border-radius: 8px;
  padding: 21px 20px 20px 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #232323;
  &:focus {
    outline: #4a67ff auto 1px;
  }
`;

const Error = styled.p`
  position: absolute;
  bottom: -25px;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #e26f6f;
`;

const Input: React.FC<IInputProps> = (props) => {
  const { type, label, name, register, errors, validation } = props;
  return (
    <Group>
      <Label>{label}</Label>
      <Control type={type} errors={errors} {...register(name, validation)} />
      {errors && <Error>{errors.message}</Error>}
    </Group>
  );
};

export default Input;
