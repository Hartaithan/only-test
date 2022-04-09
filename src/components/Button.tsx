import styled from "styled-components";

const Button = styled.button`
  height: 60px;
  width: 200px;
  background: #f5f5f5;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  color: #000000;
  margin-top: 50px;
  &:hover,
  &:active {
    background: #b3b3b3;
  }
`;

export default Button;
