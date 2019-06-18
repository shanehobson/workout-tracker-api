const mongoose = require('mongoose')

/* Mongo DB Atlas Connection string */
const uri = `mongodb+srv://shane:${process.env.MongoDbPassword}@cluster0-gjsun.mongodb.net/workout-tracker-api?retryWrites=true`

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
})