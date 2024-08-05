const toDoModel = require('../models/ToDoModel');

module.exports.getToDo = async (req, res) => {
  const toDos = await toDoModel.find();
  res.json(toDos);
};

module.exports.saveToDo = async (req, res) => {
  const { text } = req.body;

  if (!text) return res.json({ msg: 'Cant Save' });

  await toDoModel
    .create({ text })
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
};

module.exports.updateToDo = async (req, res) => {
  const { _id, text } = req.body;

  if (!_id || !text) return res.json({ msg: 'Cant Updated' });

  await toDoModel
    .findByIdAndUpdate(_id, { text })
    .then(() => res.json({ msg: 'Updated Successfully' }))
    .catch((err) => console.log(err));
};

module.exports.deleteToDo = async (req, res) => {
  const { _id } = req.body;

  if (!_id) return res.json({ msg: 'Cant delete' });

  await toDoModel
    .findByIdAndDelete(_id)
    .then(() => res.json({ msg: 'Deleted Successfully' }))
    .catch((err) => console.log(err));
};
