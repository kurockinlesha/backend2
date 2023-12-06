const router = require("express").Router();
const {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/users");

// const {
//   getBooks,
//   getBook,
//   createBook,
//   updateBook,
//   deleteBook,
// } = require("../controllers/books");

router.get("/users", getUsers);
router.get("/users/:user_id", getUser);
router.post("/users", createUser);
router.patch("/users/:user_id", updateUser);
router.delete("/users/:user_id", deleteUser);

// router.get("/books", getBooks);
// router.get("/books/:book_id", getBook);
// router.post("/books", createBook);
// router.patch("/books/:book_id", updateBook);
// router.delete("/books/:book_id", deleteBook);

module.exports = router;
