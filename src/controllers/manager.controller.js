import { getConnection } from './../database/database';
import { managerQuerys } from './../database/manager.querys';

const getAllManager = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query(managerQuerys.getALLManager);

        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getOneManager = async (req, res) => {
    try {
        const managerId = req.params.id;
         // Validate that the ID is an integer
         validateId(managerId);

        const connection = await getConnection();
        const result = await connection.query(managerQuerys.getOneManager, managerId);

        // Validate that the record exists
        validateRowAfect(result[1].affectedRows, managerId);

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
    getAllManager,
    getOneManager
};