const express = require("express");
const router = express.Router(); 
const { addTask,getAllTasks,toggleTaskDone,updateTask,deleteTask} = require("../controller/taskController.js");



router.post("/tasks", addTask);
router.get("/tasks", getAllTasks);
router.get("/tasks/:id",toggleTaskDone);
router.put("/tasks/:id",updateTask);
router.delete("/tasks/:id",deleteTask);

module.exports = router;
