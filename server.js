const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.FUNCTIONS_HTTPWORKER_PORT;

app.post("/echo", (req, res) => {
  res.json({ value: req.body });
});

app.post("/order", (req, res) => {

    const message = { ...req.body };
   const response = {
     Outputs: {
       message: message,
       res: {
         statusCode: 200,
         body: "Order complete"
       }
     }
   };

  // // this is http worker's response to the 
  // // host about the function invocation
  // // the body is taken by the host and that 
  // // becomes the3 results of the fuction invoation
   res.json(response);
});

const server = app.listen(PORT, 'localhost', () => {
   console.log(`Your port is ${PORT}`);
   const { address: host, port } = server.address();
   console.log(`Example app listening at http://${host}:${port}`);
});
