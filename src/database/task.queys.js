export const projectQuerys = {
    getALLProject: "CALL sp_get_all_projects()",
    getOneProject: "CALL sp_get_project_by_id(?)",
    addProject: "CALL sp_create_project(?,?,?,?,?)",
    updateProject: "CALL sp_update_project(?,?,?,?,?,?)",
    deleteProject: "CALL sp_delete_project(?)"
};