const TaskModel = require('../../models/task');

const create = async(req, res) => {
    const { title, description, status } = req.body
    
    try {
        const newTask = new TaskModel({title, description, status})

        const task = await newTask.save()

        return res.send({
            message: "Tarea creada exitosamente",
            task: task
        })
    } catch(err) {
        return res.status(500).send({
            message: err.message || "Ocurrió un error al crear una nueva tarea"
        })
    }
}

module.exports = { create }