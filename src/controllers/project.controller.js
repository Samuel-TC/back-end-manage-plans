import { getConnection } from './../database/database';
import { projectQuerys } from './../database/project.querys';

const getAllProject = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query(projectQuerys.getALLProject);

        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getOneProject = async (req, res) => {
    try {
        const projectId = req.params.id;
         // Validate that the ID is an integer
         validateId(projectId);

        const connection = await getConnection();
        const result = await connection.query(projectQuerys.getOneProject, projectId);

        // Validate that the record exists
        validateRowAfect(result[1].affectedRows, projectId);

        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addProject = async (req, res) => {
    try {
        const { project_name , project_manager, goal_description, issue_description, desired_outcome } = req.body
        const project = [ project_name , project_manager, goal_description, issue_description, desired_outcome ];
        const connection = await getConnection();

        const result = await connection.query(projectQuerys.addProject, project);

        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateProject = async (req, res) => {
    try {
        const { project_name , project_manager, goal_description, issue_description, desired_outcome } = req.body
        const projectId = req.params.id;
        const project = [ projectId, project_name , project_manager, goal_description, issue_description, desired_outcome ];
        
         // Validate that the ID is an integer
         validateId(projectId);
        
        const connection = await getConnection();

        const result = await connection.query(projectQuerys.updateProject, project);

        // validate that a record has been updated
        validateRowAfect(result.affectedRows, projectId);

        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


const deleteOneProject = async (req, res) => {
    try {
        const projectId = req.params.id;

        // Validate that the ID is an integer
        validateId(projectId);

        const connection = await getConnection();
        const result = await connection.query(projectQuerys.deleteProject, projectId);

        // Validate that a record has been deleted
        validateRowAfect(result.affectedRows, projectId);
        
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
    getAllProject,
    addProject, 
    updateProject,
    getOneProject,
    deleteOneProject
};