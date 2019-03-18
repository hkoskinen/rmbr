const express = require("express");
const router = express.Router();

// GET /api/notes
router.get("/", (req, res) => {
  res.json({ message: "get all notes" });
});

// GET /api/notes/:id
router.get("/:id", (req, res) => {
  const id = req.params.id;
  res.json({ message: `get note by id: ${id}`, id });
});

module.exports = router;
