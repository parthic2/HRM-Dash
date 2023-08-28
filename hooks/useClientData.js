import { useState } from 'react';

const useClientData = () => {
    const [clientData, setClientData] = useState(JSON.parse(localStorage.getItem('clients')) || []);
    const [editClientId, setEditClientId] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleEditButtonClick = (id) => {
        setEditClientId(id);
        setIsEditModalOpen(true);
    };

    const addClient = (newClient) => {
        const updatedData = [...clientData, newClient];
        setClientData(updatedData);
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
        handleEditButtonClick
    };
};

export default useClientData;