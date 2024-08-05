const { Router } = require('express');
const {
  getToDo,
  saveToDo,
  updateToDo,
  deleteToDo,
} = require('../controllers/ToDoController');

const router = Router();

router
  .get('/', getToDo)
  .post('/save', saveToDo)
  .put('/update', updateToDo)
  .delete('/delete', deleteToDo);

module.exports = router;
