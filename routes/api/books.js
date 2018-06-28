const express = require("express");
const router = express.Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
router.get("/", booksController.findAll);
router.post("/", booksController.create);

// Matches with "/api/books/:id"

router.get("/:id", booksController.findById)
router.put("/:id", booksController.update)
router.delete("/:id", booksController.remove);

module.exports = router;