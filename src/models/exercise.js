const mongoose = require('mongoose')

const exerciseSchema = new mongoose.Schema({
    date: {
        type: String,
        required: true,
        trim: true
    },
    type: {
        type: String,
        required: true,
        default: false
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    sets: {
        type: Number,
        required: true,
        trim: true
    },
    reps: {
        type: Number,
        required: true,
        trim: true
    },
    miles: {
        type: Number,
        required: true,
        trim: true
    },
    bodyParts: {
        type: [String],
        required: true,
        trim: true
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

const Exercise = mongoose.model('Exercise', exerciseSchema)

module.exports = Exercise