const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.FUNCTIONS_WORKER_PORT;

app.post("/api/echo", (req, res) => {
  res.json({ value: req.body });
});

app.post("/api/order", (req, res) => {
  const message = { ...req.body };
  const response = {
    Outputs: {
      message: message
    },
    ReturnValue: "Order complete"
  };
  res.json(response);
});

const server = app.listen(PORT, 'localhost', () => {
   console.log(`Your port is ${PORT}`);
   const { address: host, port } = server.address();
   console.log(`Example app listening at http://${host}:${port}`);
});
