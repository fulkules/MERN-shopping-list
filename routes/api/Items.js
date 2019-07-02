const express = require("express");
const router = express.Router();
const auth = require("../../middleware/auth");

// Item Model
const Item = require("../../models/Item");

// @route   GET api/items - route to api/items already in server.js
// @desc    Get all items
// @access  public
router.get("/", (req, res) => {
  Item.find()
    .sort({ date: -1 }) // sort descending with -1
    .then(items => res.json(items))
    .catch(err => console.log(err));
});

// @route   POST api/items - route to api/items already in server.js
// @desc    Create an item
// @access  private
router.post("/", auth, (req, res) => {
  const newItem = new Item({
    name: req.body.name
  });

  newItem
    .save()
    .then(item => res.json(item))
    .catch(err => console.log(err));
});

// @route   DELETE api/items/:id - route to api/items already in server.js
// @desc    Delete an item
// @access  private
router.delete("/:id", auth, (req, res) => {
  Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({ success: true })))
    .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;
