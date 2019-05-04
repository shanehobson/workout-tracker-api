const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')
const exerciseRouter = require('./routers/exercise')
const cors = require('cors');

const app = express()
const port = process.env.PORT || 3000

app.use(cors());
app.use(express.json())
app.use(userRouter)
app.use(exerciseRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})