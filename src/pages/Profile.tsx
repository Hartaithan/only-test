import React from "react";
import user from "../store/user";
import { observer } from "mobx-react-lite";

const ProfilePage: React.FC = () => {
  return <div>{user.username}</div>;
};

export default observer(ProfilePage);
