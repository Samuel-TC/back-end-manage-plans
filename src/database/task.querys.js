export const taskQuerys = {
    getALLTask: "CALL sp_get_all_tasks()",
    getOneTask: "CALL sp_get_task_by_id(?)",
    addTask: "CALL sp_create_task(?,?,?,?,?)",
    updateTask: "CALL sp_update_task(?,?,?,?,?,?,?,?,?,?,?)",
    deleteTask: "CALL sp_delete_task(?)"
};