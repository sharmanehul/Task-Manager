import axios from 'axios';

import { ADDNEW_TASK, GETALL_TASK, TOGGLE_TASK, UPDATE_TASK,DELETE_TASK,TOGGLE_TAB } from './type';

// const API_URL = "http://localhost:8000"
const API_URL = ""

export const addNewTask =(data) => async(dispatch) =>{
    try{
        
        const res = await axios.post(`${API_URL}/api/tasks`, { data });

        dispatch({type: ADDNEW_TASK ,payload: res.data});
    }
    catch(error){
        console.log('Error while calling addNewTask API',error.message);
    }
}

export const getAllTasks = () => async(dispatch) => {
    try{
        const res =await axios.get(`${API_URL}/api/tasks`);

        dispatch({type: GETALL_TASK ,payload: res.data})
    }
    catch(error){
        console.log('Error while calling getAllTasks API',error.message);
    }
}

export const toggleTask = (id) =>async(dispatch) =>{
    try{
        const res =await axios.get(`${API_URL}/api/tasks/${id}`);

        dispatch({type: TOGGLE_TASK,payload: res.data});
    }
    catch(error){
        console.log('Error while calling toggleTask API',error.message);
    }
}

export const updateTask = (id,data) =>async(dispatch) =>{
    try{
        const res =await axios.put(`${API_URL}/api/tasks/${id}`,{data});

        dispatch({type: UPDATE_TASK,payload: res.data});
    }
    catch(error){
        console.log('Error while calling updateTask API',error.message);
    }
}

export const deleteTask = (id) =>async(dispatch) =>{
    try{
        const res =await axios.delete(`${API_URL}/api/tasks/${id}`);

        dispatch({type: DELETE_TASK,payload: res.data});
    }
    catch(error){
        console.log('Error while calling deleteTask API',error.message);
    }
}

export const toggleTab = (tab) => async(dispatch) =>{
    dispatch({type: TOGGLE_TAB, selected: tab})
}