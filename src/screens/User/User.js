import React, {useState} from 'react';
import {View} from 'react-native';
import {getGithubUser} from "../../utils/github.service";
import {List} from "antd-mobile";

const Item = List.Item;
const Brief = Item.Brief;

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
        <h1>Loading User...</h1>
      </View>
    );
  }

  return (
    <View>
      <List renderHeader={() => 'User'}>
        <Item
          arrow="horizontal"
          thumb={user.avatar_url}
          onClick={() => {
          }}
        >
          {user.name}
          <Brief>{user.location}</Brief>
        </Item>
      </List>
    </View>
  );
};

export default User;
