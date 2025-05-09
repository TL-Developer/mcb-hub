import axios from 'axios';

type User = {
  username: string;
};

export async function getUsers(baseUrl: string): Promise<User[]> {
  try {
    const response = await axios.get(`${baseUrl}/users`);
    
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

export async function createUsers(baseUrl: string, user: User): Promise<User | null> {
  try {
    const response = await axios.post(`${baseUrl}/users`, user);
    
    return response.data;
  } catch (error) {
    console.error('Error creating user:', error);
    return null;
  }
}