import { useState } from "react";
import { FaTrash } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";
import "./Task.css";
import { toggleTask,updateTask,deleteTask } from "../redux/actions/tasksAction";
import {useDispatch} from "react-redux";

const Task = ({task}) => {

    const [editing,setEditing]  =useState(false);
    const [text,setText] =useState(task.data);
    const dispatch = useDispatch();

    const onFormSubmit = (e) =>{
        e.preventDefault();
        setEditing(prevState => !prevState);
        dispatch(updateTask(task._id,text))
    }

    return (
        <li className="task"
        onClick={() => dispatch(toggleTask(task._id))}
        style={{
            textDecoration: task.done ? 'line-through' : '',
            color: task.done ? '#bdc3c7' : '#34495e'
        }}
        >

           <span style={{display: editing ? 'none' : ''}}>{task.data}</span>

           <form
                style={{display: editing ? 'inline' : 'none'}}
                onSubmit={onFormSubmit}
           >
            <input 
                type="text"
                value={text}
                className="edit-task"
                onChange={(e) =>setText(e.target.value)}
            />
           </form>

            <span className="icon" onClick={() =>dispatch(deleteTask(task._id))}>
                <FaTrash />
            </span>
            <span className="icon" onClick={() =>setEditing(prevState => !prevState)}>
                <FaPencilAlt />
            </span>
        </li>
    );
}

export default Task;
