const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const routes = require('../routes/ToDoRoute');

const app = express();
const PORT = process.env.port || 5000;
mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log('Connected TO Mongo DB'))
  .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());

app.use(routes);

app.listen(PORT, () => {
  console.log(`listening on : ${PORT} .....`);
});
