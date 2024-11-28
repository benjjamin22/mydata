const url = require('url')
const express = require('express')
const router = express.Router()
const users = require('../data.json');

router.get("/:id", (req, res) => {
    let id = req.params.id;
    let post = users.find((post) => post.id == id);
    if (!post) {
        res.json({ Message: "Not Found Any Post Related to Your ID" });
    } else {
        res.json(post);
    }
});

module.exports = router
