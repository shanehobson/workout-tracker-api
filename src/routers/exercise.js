const express = require('express')
const Exercise = require('../models/exercise')
const auth = require('../middleware/auth')
const router = new express.Router()

router.post('/exercises', auth, async (req, res) => {
    const exercise = new Exercise({
        ...req.body,
        owner: req.user._id
    })

    try {
        await exercise.save()
        res.status(201).send(exercise)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.get('/exercises', auth, async (req, res) => {
    try {
        const exercises = await req.user.populate('exercises').execPopulate()
        console.log(exercises)
        res.send(req.user.exercises)
    } catch (e) {
        console.log(e);
        res.status(500).send()
    }
})

router.get('/exercises/:id', auth, async (req, res) => {
    const _id = req.params.id

    try {
        const exercise = await Exercise.findOne({ _id, owner: req.user._id })

        if (!exercise) {
            return res.status(404).send()
        }

        res.send(exercise)
    } catch (e) {
        res.status(500).send()
    }
})

router.patch('/exercises/:id', auth, async (req, res) => {
    const updates = Object.keys(req.body)
    const allowedUpdates = ['date', 'type', 'name', 'sets', 'reps', 'miles', 'bodyParts']
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update))

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' })
    }

    try {
        const exercise = await Exercise.findOne({ _id: req.params.id, owner: req.user._id})

        if (!exercise) {
            return res.status(404).send()
        }

        updates.forEach((update) => exercise[update] = req.body[update])
        await exercise.save()
        res.send(exercise)
    } catch (e) {
        res.status(400).send(e)
    }
})

router.delete('/exercises/:id', auth, async (req, res) => {
    try {
        const exercise = await Exercise.findOneAndDelete({ _id: req.params.id, owner: req.user._id })

        if (!exercise) {
            res.status(404).send()
        }

        res.send(exercise)
    } catch (e) {
        res.status(500).send()
    }
})

module.exports = router