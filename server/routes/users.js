const express = require('express')
const router = express.Router()

const db = require('../db/util/users')

// If my author loved me, they would have written me some tests. I'll go stand in the corner and feel ashamed now.

// GET all users - not being used
router.get('/', (req, res) => {
  db.getUsers()
    .then(users => {
      res.json(users)
      return null
    })
    .catch(e => {
      res.status(500).send(e.message)
    })
})

// GET specific user - not being used
router.get('/:userId', (req, res) => {
  const userId = Number(req.params.userId)

  db.getUserById(userId)
    .then(user => {
      res.json(user)
      return null
    })
    .catch(e => {
      res.status(500).send(e.message)
    })
})

router.patch('/:userId', (req, res) => {
  const userId = Number(req.params.userId)
  const user = req.body
  db.updateUser(userId, user)
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch(e => {
      res.status(500).send(e.message)
    })
})

// DELETE user - not being used
router.delete('/:userId', (req, res) => {
  const userId = Number(req.params.userId)
  db.deleteUser(userId)
    .then(() => {
      res.sendStatus(200)
      return null
    })
    .catch(e => {
      res.status(500).send(e.message)
    })
})

module.exports = router
