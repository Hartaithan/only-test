import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import user from "../store/user";
import { observer } from "mobx-react-lite";
import Button from "../components/Button";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Greetings = styled.p`
  display: inline;
  font-weight: 400;
  font-size: 40px;
  line-height: 48px;
  color: #000000;
  @media (max-width: 768px) {
    font-size: 30px;
  }
  @media (max-width: 425px) {
    display: block;
    text-align: center;
    line-height: 24px;
    font-size: 20px;
  }
`;

const Bold = styled(Greetings)`
  font-weight: 700;
`;

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();

  if (!user.isLogIn) {
    return (
      <Wrapper>
        <Greetings>Необходимо авторизироваться</Greetings>
        <Button onClick={() => navigate("/login")}>Войти</Button>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Greetings>
        Здравствуйте, <Bold>{user.username}</Bold>
      </Greetings>
      <Button
        onClick={() => {
          navigate("/login");
          user.logout();
        }}
      >
        Выйти
      </Button>
    </Wrapper>
  );
};

export default observer(ProfilePage);
