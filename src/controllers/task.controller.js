import { getConnection } from './../database/database';
import { taskQuerys } from './../database/task.querys';

const getAllTask = async (req, res) => {
    try {
        const taskId = req.params.id;
        // Validate that the ID is an integer
        validateId(taskId);
        const connection = await getConnection();
        const result = await connection.query(taskQuerys.getALLTask, taskId);
        console.log(result)
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


const addTask = async (req, res) => {
    try {
        const tasks = req.body;
        const projectId = req.params.id;
        // Validate that the ID is an integer
        validateId(projectId);
        const connection = await getConnection();
        const results = [];

        for (const task of Object.values(tasks)) {
            const idtask = Object.values(task);
            if (idtask[0] === '') {
                const newTask = { ...task, id_project: projectId };
                const data = Object.values(newTask)
                data.shift();
                const result = await connection.query(taskQuerys.addTask, data);
                results.push(result);
            } else {
                const data = Object.values(task)
                const result = await connection.query(taskQuerys.updateTask, data);
                results.push(result);
            }
        }

        res.json(results);
    } catch (error) {
        res.status(500).send(error.message);
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


const deleteOneTaskByID = async (req, res) => {
    try {
        const taskId = req.params.id;
        // Validate that the ID is an integer
        validateId(taskId);

        console.log(taskId)
        const connection = await getConnection();
        const result = await connection.query(taskQuerys.deleteOneTask, taskId);
        // Validate that a record has been deleted
        validateRowAfect(result.affectedRows, taskId);

        res.json(result);

    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

// validates that the project id is a positive integer
const validateId = (id) => {
    if (!Number.isInteger(parseInt(id))) {
        throw new Error('ID must be an integer');
    }
};

// Validate that the id corresponds to a valid project
const validateRowAfect = (numRow, id) => {
    if (numRow === 0) {
        throw new Error(`No record with ID found ${id}`);
    }
};

export const methods = {
    getAllTask,
    addTask,
    deleteOneTask,
    deleteOneTaskByID
};