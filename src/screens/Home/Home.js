import React from 'react';
import {StyleSheet, View} from 'react-native';
import {default as githubUsers} from '../../config/users.github.json';
import User from '../User/User';
import UserButton from "./UserButton";

const Home = ({navigation}) => {
  const githubUserButtons = githubUsers.users.map((username, index) => (
    <UserButton username={username} onPress={() => navigation.push('User', {username})}/>
  ));
  return (
    <View style={styles.container}>
      <h1>Top 5 Github Users</h1>
      <p>Tap the username to see more information</p>
      {githubUserButtons}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home;
