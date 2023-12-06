// homework2
const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const userRouter = require("./routes/users");
const bookRouter = require("./routes/books");
const loggerOne = require("./middlewares/loggerOne");

dotenv.config();

const {
  PORT = 3005,
  API_URL = "http://127.0.0.1",
  MONGO_URL = "mongodb://127.0.0.1:27017/mydb",
} = process.env;

mongoose
  .connect(MONGO_URL)
  .then(console.log("Connected to MongoDB"))
  .catch((error) => console.log(error.message));

const app = express();

app.use(cors());
app.use(loggerOne);
app.use(bodyParser.json());

app.use(userRouter);
app.use(bookRouter);

app.get("/", (request, response) => {
  response.status(200);
  response.send("Library: users, books");
});

app.listen(PORT, () => {
  console.log(`Ссылка на сервер: ${API_URL}:${PORT}`);
});

// homework1

// const http = require("http");
// const getUsers = require("./modules/users");

// const hostname = "127.0.0.1";
// const port = 3003;

// // создание сервера происходит при помощи функции createServer
// const server = http.createServer((request, response) => {
//   const url = new URL(request.url, `http://${hostname}`);
//   console.log(url);
//   console.log(url.searchParams);

//   const query = url.searchParams;

//   if (query.has("hello")) {
//     const name = query.get("hello");

//     if (name) {
//       response.statusCode = 200;
//       response.setHeader = "Content-Type: text/plain";
//       response.write(`Hello, ${name}!`);
//       response.end();
//       return;
//     }

//     response.statusCode = 400;
//     response.setHeader = "Content-Type: text/plain";
//     response.write("Enter a name");
//     response.end();
//     return;
//   } else if (url.pathname === "/users") {
//     response.statusCode = 200;
//     response.setHeader = "Content-Type: application/json";
//     response.write(getUsers());
//     response.end();
//     return;
//   } else if (request.url === "/") {
//     response.statusCode = 200;
//     response.setHeader = "Content-Type: text/plain";
//     response.write("Hello, World!");
//     response.end();
//   } else {
//     response.statusCode = 500;
//     response.end();
//     return;
//   }
// });

// // запуск сервера выполняется командой .listen
// server.listen(port, hostname, () => {
//   console.log(`Сервер запущен по адресу http://${hostname}:${port}/`);
// });
