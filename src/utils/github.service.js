import axios from 'axios';

export async function getGithubUser(username) {
  const {data: user} = await axios.get(`https://api.github.com/users/${username}`)
  return user;
}
