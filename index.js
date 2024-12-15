const express = require('express')
const cors = require('cors')

    //const http = require('http')


const PORT = process.env.PORT || 5000

const app = express()
app.use(express.json())


// Enable cors
//app.use(cors())

app.use('/radical', require('./routes/mydb'))



app.listen(PORT, () => console.log(`Server running on port ${PORT}`))

module.exports = app;
