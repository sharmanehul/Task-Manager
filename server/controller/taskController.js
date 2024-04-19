const Task = require("../model/Task.js");

const addTask = async (req, res) => {
    try {
        const newTask = await Task.create({
            data: req.body.data,
            createdAt: Date.now()
        });
        await newTask.save();

        return res.status(201).json(newTask);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const getAllTasks = async (req, res) => {
    try{
        const tasks = await Task.find();

        return res.status(200).json(tasks);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const toggleTaskDone = async (req, res) => {
    try{
        const taskRef = await Task.findById(req.params.id);

        const task =await Task.findOneAndUpdate(
            {_id: req.params.id},
            {done: !taskRef.done}
        )
        await task.save();

        return res.status(200).json(task);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const updateTask = async (req, res) => {
    try{
        await Task.findOneAndUpdate(
            {_id: req.params.id},
            {data: req.body.data}
        )
        const task =await Task.findById(req.params.id);

        return res.status(200).json(task);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

const deleteTask = async (req, res) => {
    try{
        const task = await Task.findByIdAndDelete(req.params.id)

        return res.status(200).json(task);
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

module.exports = { addTask, getAllTasks,toggleTaskDone,updateTask,deleteTask};

