import { useState } from 'react';

const useProjectData = () => {
    const [projectData, setProjectData] = useState(JSON.parse(localStorage.getItem('project')) || []); 
    const [editProjectId, setEditProjectId] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleEditButtonClick = (id) => {
        setEditProjectId(id);
        setIsEditModalOpen(true);
    };

    const addProject = (newProject) => {
        const updatedData = [...projectData, newProject];
        setProjectData(updatedData);
        localStorage.setItem('project', JSON.stringify(updatedData));
    };

    const editProject = (editedProject) => {
        const updatedData = projectData.map((project) =>
            project.id === editedProject.id ? editedProject : project
        );
        setProjectData(updatedData);
        setEditProjectId(null);
        localStorage.setItem('project', JSON.stringify(updatedData));
    };

    const deleteProject = (id) => {
        const updatedData = projectData.filter((project) => project.id !== id);
        setProjectData(updatedData);
        localStorage.setItem('project', JSON.stringify(updatedData));
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