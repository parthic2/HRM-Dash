import { useState } from 'react';

const useClientData = (initialData) => {
    const [clientData, setClientData] = useState(initialData); // State to hold form data
    const [editClientId, setEditClientId] = useState(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);

    const handleEditButtonClick = (id) => {
        setEditClientId(id);
        setIsEditModalOpen(true);
    };

    const addClient = (newClient) => {
        setClientData([...clientData, newClient]);
    };

    const editClient = (editedClient) => {
        const updatedData = clientData.map((client) =>
            client.id === editedClient.id ? editedClient : client
        );
        setClientData(updatedData);
        setEditClientId(null);
    };

    const deleteClient = (id) => {
        const updatedData = clientData.filter((client) => client.id !== id);
        setClientData(updatedData);
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