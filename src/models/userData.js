const mongoose = require('mongoose')

const userDataSchema = new mongoose.Schema({
    liftingExercises: {
        type: [String],
        required: true,
        trim: true,
        default: ['Bench Press', 'Military Press', 'Bicep Curls', 'HAmmer Curls', 'Bent Over Rows', 'Abs', 'Squat', 'Tricep Pulldown', 'Seated Rows', 'Reverse Bench']
    },
    cardioExercises: {
        type: [String],
        required: true,
        trim: true,
        default: ['Run', 'Swim', 'Hike', 'Kayak', 'Walk', 'Bicycle']
    },
    bodyParts: {
        type: [String],
        required: true,
        trim: true,
        default: ['Shoulders', 'Chest', 'Biceps', 'Triceps', 'Lats', 'Upper Back', 'Lower Back', 'Abs', 'Legs']
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
}, {
    timestamps: true
})

const UserData = mongoose.model('UserData', userDataSchema)

module.exports = UserData