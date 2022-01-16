import api from '@apis/api';

export async function getUserProfile(username) {
  const response = await api.get(`https://api.github.com/users/${username}`);
  return response.data;
}
