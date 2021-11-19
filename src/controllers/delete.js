const TaskModel = require('../models/task');

const deleteOne = async(req, res) => {
    const { id } = req.params

    try {
        const task = await TaskModel.remove({_id: id})
        return res.send({
            message: `Tarea con id: ${id} eliminada correctamente`,
            task: task
        })
    } catch(err) {
        return res.status(500).send({
            message: err.message || `Ocurrió un error al eliminar tarea con id ${id}`
        })
    }
}

module.exports = { deleteOne }