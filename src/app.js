const http = require("http");
// const url = require('url');
// const fs = require('fs');
const getUsers = require("./modules/users");

const hostname = "127.0.0.1";
const port = 3003;

const server = http.createServer((request, response) => {
  const url = new URL(request.url, `http://${request.headers.host}`);
  const query = url.searchParams;
  const name = query.get("hello");

  if (query.has("hello")) {
    if (!(name === "")) {
      response.statusCode = 200;
      response.statusMessage = "OK";
      response.header = "Content-Type: text/plain";
      response.write(`Hello,${name}`);
      response.end();
      return;
    } else {
        response.statusCode = 400;
        response.statusMessage = "Error";
        response.header = "Content-Type: text/plain";
        response.write("Enter a name");
        response.end();
    }
  } else if (request.url === "/?users") {
    response.status = 200;
    response.statusMessage = "OK";
    response.header = "Content-Type: application/json";
    response.write(getUsers());
    response.end();
  } else if (request.url === "/") {
    response.statusCode = 200;
    response.statusMessage = "OK";
    response.header = "Content-Type: text/plain";
    response.write("Hello world");
    response.end();

  } else {
    response.statusCode = 500;
    response.statusMessage = "Internal Server Error";
    response.header = "Content-Type: text/plain";
    response.write("Not Found");
    response.end();
  }

});

server.listen(3003, () => {
  console.log("Сервер запущен по адресу http://127.0.0.1:3003");
});
