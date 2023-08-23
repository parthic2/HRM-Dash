import EmployeesData from 'data/employees/employees';
import { useState } from 'react';

const useAnnounceData = () => {
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [announcements, setAnnouncements] = useState([]);
    const [selectAllSelected, setSelectAllSelected] = useState(false);
    const [announcementId, setAnnouncementId] = useState('');
    const [announcementText, setAnnouncementText] = useState('');
    const [announcementDetails, setAnnouncementDetails] = useState('');
    const [editAnnouncementIndex, setEditAnnouncementIndex] = useState(null);
    const [selectedEmployeeNames, setSelectedEmployeeNames] = useState([]);
    const [selectedEmployees, setSelectedEmployees] = useState([]);

    const handleEdit = (index) => {
        const announcement = announcements[index];
        setEditAnnouncementIndex(index);
        setAnnouncementId(announcement.id);
        setAnnouncementText(announcement.announcement);
        setAnnouncementDetails(announcement.details);
        setSelectedEmployeeNames(announcement.employees);

        // Initialize selected employees based on employee names
        const selectedEmployeesForEdit = EmployeesData.filter(
            (employee) => announcement.employees.includes(employee.name)
        );
        setSelectedEmployees(selectedEmployeesForEdit);

        setIsEditModalOpen(true);
    };

    const handleDelete = (index) => {
        const newAnnouncements = [...announcements];
        newAnnouncements.splice(index, 1);
        setAnnouncements(newAnnouncements);
    };

    return {
        isEditModalOpen,
        setIsEditModalOpen,
        announcements,
        setAnnouncements,
        selectAllSelected,
        setSelectAllSelected,
        announcementId,
        setAnnouncementId,
        announcementText,
        setAnnouncementText,
        announcementDetails,
        setAnnouncementDetails,
        editAnnouncementIndex,
        setEditAnnouncementIndex,
        selectedEmployeeNames,
        setSelectedEmployeeNames,
        selectedEmployees,
        setSelectedEmployees,
        handleEdit,
        handleDelete,
    }
}

export default useAnnounceData;