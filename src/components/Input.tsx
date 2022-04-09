import React from "react";
import styled from "styled-components";
import { IInputProps } from "../models/InputModel";

const Group = styled.div`
  display: flex;
  flex-direction: column;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Label = styled.label`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #1f1f1f;
  margin-bottom: 10px;
`;

const Control = styled.input.attrs((props) => ({
  type: props.type,
}))`
  height: 60px;
  width: 100%;
  border: none;
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

const Input: React.FC<IInputProps> = (props) => {
  const { type, label, name, register, required } = props;
  return (
    <Group>
      <Label>{label}</Label>
      <Control type={type} {...register(name, { required })} />
    </Group>
  );
};

export default Input;
