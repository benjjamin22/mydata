const express = require('express')
const cors = require('cors')
const users = require('./data.json');
    //const http = require('http')


const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())


// Enable cors
app.use(cors())


app.get("/:id", (req, res) => {
    let id = req.params.id;
    let post = users.find((post) => post.id == id);
    if (!post) {
        res.json({ Message: "Not Found Any Post Related to Your ID" });
    } else {
        res.json(post);
    }
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

module.exports = app;
