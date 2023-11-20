import { useEffect, useState } from 'react';

const useProjectData = () => {
    const [projectData, setProjectData] = useState(JSON.parse(localStorage.getItem('project')) || []); 
    const [editProjectId, setEditProjectId] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [maxId, setMaxId] = useState(0);

    useEffect(() => {
        // Calculate the maximum ID from the existing data
        const maxExistingId = projectData.reduce((maxId, project) => Math.max(maxId, project.id), 0);
        setMaxId(maxExistingId);
    }, [projectData]);

    const handleEditButtonClick = (id) => {
        setEditProjectId(id);
        setIsEditModalOpen(true);
    };

    const addProject = (newProject) => {
         // Increment the maxId and assign it to the new employee
        const newId = maxId + 1;
        const updatedData = [...projectData, { ...newProject, id: newId }];
        setProjectData(updatedData);
        setMaxId(newId);
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
        handleEditButtonClick,
        maxId
    };
};

export default useProjectData;