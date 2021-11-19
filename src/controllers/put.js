const TaskModel = require('../models/task');

const update = async(req, res) => {
    const { id } = req.params
    const { title, description, status } = req.body
    
    try {
        const task = await TaskModel.findByIdAndUpdate({
            _id: id,
        }, {
            title: title,
            description: description,
            status: status
        }, {new: true})

        return res.send({
            message: `Tarea con id: ${id} modificada con éxito`,
            task: task 
        })
    } catch(err) {
        return res.status(500).send({
            message: err.message || `Error al intentar modificar tarea con id: ${id}`
        })
    }
}

module.exports = { update }