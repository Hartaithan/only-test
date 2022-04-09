import React from "react";
import styled from "styled-components";
import { ICheckboxProps } from "../models/CheckboxModel";

const Wrapper = styled.label.attrs({
  htmlFor: "remember",
})`
  width: fit-content;
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const Label = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: #1f1f1f;
  margin-left: 14px;
`;

const Container = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

const Icon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 14px;
  height: 14px;
  background: #4a67ff;
  border-radius: 2px;
`;

const HiddenCheckbox = styled.input.attrs({
  id: "remember",
  type: "checkbox",
})`
  display: none;
`;

const StyledCheckbox = styled.div.attrs((props: ICheckboxProps) => ({
  checked: props.checked,
}))`
  position: relative;
  display: inline-block;
  width: 20px;
  height: 20px;
  border: 1px solid #000000;
  border-radius: 4px;
  transition: all 150ms;
  ${Icon} {
    visibility: ${(props) => (props.checked ? "visible" : "hidden")};
  }
`;

const Checkbox: React.FC<ICheckboxProps> = (props) => {
  const { className, label, checked } = props;
  return (
    <Wrapper>
      <Container className={className}>
        <HiddenCheckbox {...props} />
        <StyledCheckbox checked={checked}>
          <Icon />
        </StyledCheckbox>
      </Container>
      <Label>{label}</Label>
    </Wrapper>
  );
};

export default Checkbox;
