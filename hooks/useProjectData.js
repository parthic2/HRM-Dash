import { useState } from 'react';

const useProjectData = (initialData) => {
    const [projectData, setProjectData] = useState(initialData); // State to hold form data
    const [editProjectId, setEditProjectId] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleEditButtonClick = (id) => {
        setEditProjectId(id);
        setIsEditModalOpen(true);
    };

    const addProject = (newProject) => {
        setProjectData([...projectData, newProject]);
    };

    const editProject = (editedProject) => {
        const updatedData = projectData.map((project) =>
            project.id === editedProject.id ? editedProject : project
        );
        setProjectData(updatedData);
        setEditProjectId(null);
    };

    const deleteProject = (id) => {
        const updatedData = projectData.filter((project) => project.id !== id);
        setProjectData(updatedData);
    };

    return {
        projectData,
        editProjectId,
        setEditProjectId,
        addProject,
        editProject,
        deleteProject,
        isEditModalOpen,
        setIsEditModalOpen,
        handleEditButtonClick
    };
};

export default useProjectData;