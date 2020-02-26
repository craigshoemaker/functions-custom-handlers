const express = require('express');
const app = express();
app.use(express.json());

if (process.env.NODE_ENV !== 'production') {
  // Load environment variables from .env file during development
  require('dotenv').config();
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
   const addressInfo = server.address();
   const host = addressInfo.address;
   const port = addressInfo.port;
   console.log(`Example app listening at http://${host}:${port}`);
});
