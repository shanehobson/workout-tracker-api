const mongoose = require('mongoose')

const userDataSchema = new mongoose.Schema({
    liftingExercises: {
        type: [String],
        required: true,
        trim: true,
        default: ['Bench Press', 'Military Press', 'Bicep Curls', 'Hammer Curls', 'Bent Over Rows', 'Abs', 'Squat', 'Tricep Pulldown', 'Seated Rows', 'Reverse Bench']
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
    bodyPartsMap: {
        type: Map,
        required: true,
        default: {
            'Bench Press': ['Chest'],
            'Military Press': ['Shoulders'],
            'Bicep Curls': ['Biceps'],
            'Hammer Curls': ['Biceps'],
            'Bent Over Rows': ['Upper Back'],
            'Abs': ['Abs'],
            'Squat': ['Legs'],
            'Tricep Pulldown': ['Trcipes'],
            'Seated Rows': ['Upper Back'],
            'Reverse Bench': ['Upper back'],
            'Run': ['Legs'],
            'Swim': ['Legs', 'Shoulders', 'Abs', 'Upper Back', 'Lower Back'],
            'Hike': ['Legs'],
            'Kayak': ['Upper Back', 'Lower Back', 'Abs'],
            'Walk': ['Legs'],
            'Bicycle': ['Legs']
        }
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