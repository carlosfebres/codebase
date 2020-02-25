import {Button} from "react-native";
import React from "react";

const UserButton = ({onPress, username}) => (
  <Button title={username} onPress={onPress} />
);

export default UserButton;
