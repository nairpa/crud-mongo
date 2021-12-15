const TasksModel = require('../models/task');

const getAll = async (req, res) => {
    try {
        const tasks = await TasksModel.find();
        return res.status(200).send({
            message: 'Tareas obtenidas',
            task: tasks
        })
    } catch(err) {
        return res.status(404).json({message: err.message})
    }
}

module.exports = { getAll }