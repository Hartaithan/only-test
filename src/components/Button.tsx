import React from "react";
import styled from "styled-components";

const SubmitButton: React.FC = styled.button.attrs(() => ({
  type: "submit",
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
  &:hover,
  &:active {
    background: #2544e1;
  }
  &:disabled {
    background: #99a9ff;
  }
`;

export default SubmitButton;
