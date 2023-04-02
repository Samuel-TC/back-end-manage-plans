import { getConnection } from './../database/database';
import { taskQuerys } from './../database/task.querys';

const getAllTask = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query(taskQuerys.getALLTask);

        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getOneTask = async (req, res) => {
    try {
        const taskId = req.params.id;
         // Validate that the ID is an integer
         validateId(taskId);

        const connection = await getConnection();
        const result = await connection.query(taskQuerys.getOneTask, taskId);

        // Validate that the record exists
        validateRowAfect(result[1].affectedRows, taskId);

        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addTask = async (req, res) => {
    try {
        const { task_name , responsible, priority, status, start_date, end_date, required_resources, potential_blockers, stakeholders, milestone, notes } = req.body
        const task = [ task_name , responsible, priority, status, start_date, end_date, required_resources, potential_blockers, stakeholders, milestone, notes ];
        const connection = await getConnection();

        const result = await connection.query(taskQuerys.addTask, task);

        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateTask = async (req, res) => {
    try {
        const { task_name , responsible, priority, status, start_date, end_date, required_resources, potential_blockers, stakeholders, milestone, notes } = req.body
        const taskId = req.params.id;
        const task = [ taskId,task_name , responsible, priority, status, start_date, end_date, required_resources, potential_blockers, stakeholders, milestone, notes ];
        
         // Validate that the ID is an integer
         validateId(taskId);
        
        const connection = await getConnection();

        const result = await connection.query(taskQuerys.updateTask, task);

        // validate that a record has been updated
        validateRowAfect(result.affectedRows, taskId);

        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


const deleteOneTask = async (req, res) => {
    try {
        const taskId = req.params.id;

        // Validate that the ID is an integer
        validateId(taskId);

        const connection = await getConnection();
        const result = await connection.query(taskQuerys.deleteTask, taskId);

        // Validate that a record has been deleted
        validateRowAfect(result.affectedRows, taskId);
        
        res.json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

// validates that the project id is a positive integer
const validateId = (id) =>{
    if (!Number.isInteger(parseInt(id))) {
        throw new Error('ID must be an integer');
    } 
};

// Validate that the id corresponds to a valid project
const validateRowAfect = ( numRow, id ) => {
    if (numRow === 0) {
        throw new Error(`No record with ID found ${id}`);
    }
};

export const methods = {
    getAllTask,
    addTask, 
    updateTask,
    getOneTask,
    deleteOneTask
};