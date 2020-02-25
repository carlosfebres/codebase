import React, {useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {getGithubUser} from "../../utils/github.service";
import {Brief, Item, List, Spin} from "antd-mobile";

const User = ({route}) => {
  const {username} = route.params;
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  getGithubUser(username).then(user => {
    setUser(user);
    setLoading(false);
  });

  if (loading) {
    return (
      <View>
        <Spin />
      </View>
    );
  }

  return (
    <View>
      <List renderHeader={() => 'User'}>
        <Item
          arrow="horizontal"
          thumb={user.avatar_url}
          onClick={() => {}}
        >
          {user.name}
          <Brief>{user.location}</Brief>
        </Item>
      </List>
    </View>
  );
};

export default User;
