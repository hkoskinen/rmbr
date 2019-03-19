const express = require("express");
const { Note } = require("../models/note");
const router = express.Router();

// GET /api/notes
router.get("/", async (req, res) => {
  try {
    const notes = await Note.find({});
    res.send(notes);
  } catch (err) {
    console.log(err);
  }
});

// GET /api/notes/:id
router.get("/:id", (req, res) => {});

// POST /api/notes
router.post("/", (req, res) => {});

// PUT /api/notes/:id
router.put("/:id", (req, res) => {});

// DELETE /api/notes/:id
router.delete("/:id", (req, res) => {});

module.exports = router;
