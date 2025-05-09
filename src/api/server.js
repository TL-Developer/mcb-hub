const express = require('express');
const app = express();
const { faker } = require('@faker-js/faker'); 

app.use(express.json());

const users = Array.from({ length: 10 }, () => ({
  userId: faker.string.uuid(),
  username: faker.internet.username(),
  email: faker.internet.email(),
  avatar: faker.image.avatar(),
  password: faker.internet.password(),
  birthdate: faker.date.birthdate(),
  registeredAt: new Date().toISOString(),
}));

app.get('/users', (_, res) => {  
  res.json(users);
});

app.post('/users', (req, res) => {
  const { username } = req.body;

  if (!username) {
    return res.status(400).json({
      success: false,
      message: 'Username is required',
    });
  }

  const user = {
    userId: faker.string.uuid(),
    username: username,
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: new Date().toISOString(),
  };

  users.push(user);
  
  res.json(user);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});