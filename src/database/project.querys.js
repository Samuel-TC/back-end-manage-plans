export const projectQuerys = {
    getALLProject: "CALL sp_get_all_tasks()",
    getOneProject: "CALL sp_get_task_by_id(?)",
    addProject: "CALL sp_create_task(?,?,?,?,?)",
    updateProject: "CALL sp_update_task(?,?,?,?,?,?,?,?,?,?,?)",
    deleteProject: "CALL sp_delete_task(?)"
};