const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route   GET api/items
// @desc    Get All Items
// @access  Public
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1 })
        .then(items => res.json(items))
});

// @route   POST api/items
// @desc    Create an Item
// @access  Public     NOTE: This is usually private with user authentication enabled!
router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name
    });

    newItem.save().then(item => res.json(item));
});

// @route   DELETE api/items/:id
// @desc    Delete an Item
// @access  Public     NOTE: This is usually private with user authentication enabled!
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)    // Parameter exists in URL, 'req.params.id' fetches it from URI
        .then(item => item.remove().then(() => res.json({ success: true })))
        .catch(err => res.status(404).json({ success: false }));
});

module.exports = router;