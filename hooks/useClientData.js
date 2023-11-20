import { useEffect, useState } from 'react';

const useClientData = () => {
    const [clientData, setClientData] = useState(JSON.parse(localStorage.getItem('clients')) || []);
    const [editClientId, setEditClientId] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [maxId, setMaxId] = useState(0);

    useEffect(() => {
        // Calculate the maximum ID from the existing data
        const maxExistingId = clientData.reduce((maxId, client) => Math.max(maxId, client.id), 0);
        setMaxId(maxExistingId);
    }, [clientData]);

    const handleEditButtonClick = (id) => {
        setEditClientId(id);
        setIsEditModalOpen(true);
    };

    const addClient = (newClient) => {
        // Increment the maxId and assign it to the new employee
        const newId = maxId + 1;
        const updatedData = [...clientData, { ...newClient, id: newId }];
        setClientData(updatedData);
        setMaxId(newId);
        localStorage.setItem('clients', JSON.stringify(updatedData));
    };

    const editClient = (editedClient) => {
        const updatedData = clientData.map((client) =>
            client.id === editedClient.id ? editedClient : client
        );
        setClientData(updatedData);
        setEditClientId(null);
        localStorage.setItem('clients', JSON.stringify(updatedData));
    };

    const deleteClient = (id) => {
        const updatedData = clientData.filter((client) => client.id !== id);
        setClientData(updatedData);
        localStorage.setItem('clients', JSON.stringify(updatedData));
    };

    return {
        clientData,
        editClientId,
        setEditClientId,
        addClient,
        editClient,
        deleteClient,
        isEditModalOpen,
        setIsEditModalOpen,
        handleEditButtonClick,
        maxId
    };
};

export default useClientData;