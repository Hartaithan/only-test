import React from "react";
import styled from "styled-components";
import { IAlertProps } from "../models/AlertModel";

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 60px;
  width: 100%;
  background: #f5e9e9;
  border: 1px solid #e26f6f;
  box-sizing: border-box;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 27px;
`;

const Message = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  color: #000000;
  margin-left: 14px;
`;

const Alert: React.FC<IAlertProps> = (props) => {
  const { message } = props;
  return (
    <Wrapper>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10" cy="10" r="10" fill="#FFC8C8" />
        <path
          d="M9.036 13.446V15H10.59V13.446H9.036ZM10.478 8.084V5.004H9.148V8.084L9.498 12.438H10.128L10.478 8.084Z"
          fill="#EE6565"
        />
      </svg>
      <Message>{message}</Message>
    </Wrapper>
  );
};

export default Alert;
