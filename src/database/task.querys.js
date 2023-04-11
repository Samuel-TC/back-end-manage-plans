export const taskQuerys = {
    getALLTask: "CALL sp_get_all_tasks(?)",
    addTask: "CALL sp_create_task(?,?,?,?,?,?,?,?,?,?,?,?)",
    updateTask: "CALL sp_update_task(?,?,?,?,?,?,?,?,?,?,?,?)",
    deleteTask: "CALL sp_delete_task(?)",
    deleteOneTask: "CALL sp_delete_one_task(?)"
};