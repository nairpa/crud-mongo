const TaskModel = require('../models/task');

const getOne = async(req, res) => {
    const { id } = req.params;
    
    try {
        const task = await TaskModel.findById({ _id : id})
        return res.send({
            message: `Tarea con id: ${id} encontrada`,
            task: task
        })
    } catch(err) {
        return res.status(404).send({
            message: err.message || `No se encontro la tarea con id: ${id}`
        })
    }
}

module.exports = { getOne }