const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

const port = 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});

app.get('/', (req, res) => {
  res.send('Hello World! Dhruv this side.');
});

app.post('/api/users', (req, res) => {
  const { name, email } = req.body;

  res.json({ message: `User ${name} with email ${email} was created.` });
});