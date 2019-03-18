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

// POST /api/notes
router.post("/", (req, res) => {
  res.json({ message: "Add note" });
});

// PUT /api/notes/:id
router.put("/:id", (req, res) => {
  res.json({ message: "Update note" });
});

// DELETE /api/notes/:id
router.delete("/:id", (req, res) => {
  res.json({ message: "Delete note" });
});

module.exports = router;
