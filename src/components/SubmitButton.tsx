import styled from "styled-components";
import { ISubmitButtonProps } from "../models/SubmitButtonModel";

const SubmitButton = styled.button.attrs((props: ISubmitButtonProps) => ({
  type: "submit",
  disabled: props.disabled,
}))`
  height: 60px;
  width: 100%;
  background: #4a67ff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #ffffff;
  margin-top: 20px;
  &:hover,
  &:active {
    background: #2544e1;
  }
  &:disabled {
    background: #99a9ff;
    pointer-events: none;
  }
`;

export default SubmitButton;
