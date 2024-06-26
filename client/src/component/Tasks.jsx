import { useEffect } from "react";
import { getAllTasks } from "../redux/actions/tasksAction";
import { useDispatch,useSelector } from 'react-redux';
import { ALL_TASKS,DONE_TASKS,ACTIVE_TASKS } from "../redux/actions/type";
import  Task  from "./Task";
import Tabs from "./Tabs";

export const Tasks = () =>{

    const dispatch =useDispatch();

    const tasks =useSelector(state => state.tasks);
    const currentTab =useSelector(state =>state.currentTab);

    useEffect(() =>{
        dispatch(getAllTasks());
    },[dispatch])

    const getTasks = () =>{
        if(currentTab === ALL_TASKS){
            return tasks;
        }else if(currentTab === ACTIVE_TASKS){
            return tasks.filter(task =>!task.done)
        }else if(currentTab === DONE_TASKS){
            return tasks.filter(task => task.done)
        }
    }

    return(
        <article>
            <div>
                <Tabs currentTab={currentTab}/>
            </div>
            <ul>
                {
                getTasks().map(task => ( 
                   <Task 
                   key ={task._id}
                   task={task}/>
                ))
                }
            </ul>
        </article>
    )
}

export default Tasks;