const express = require('express');
const app = express();

app.use(express.json());

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config(); // Load env variables from .env file during dev
}

const PORT = process.env.FUNCTIONS_WORKER_PORT;

app.post("/api/echo", (req, res) => {
  res.json({ value: req.body });
});

app.post('/api/order', (req, res, next) => {
  res.json({ value: req.body });
});

const server = app.listen(PORT, 'localhost', () => {
   console.log(`Your port is ${PORT}`);
   const { address:host, port } = server.address();
   console.log(`Example app listening at http://${host}:${port}`);
});
