import { v4 as uuid } from 'uuid';

export const DashboardMenu = [
	{
		id: uuid(),
		title: 'Dashboard',
		icon: 'home',
		link: '/',
		roles: ["Admin", "HR", "Employee"],
	},
	{
		id: uuid(),
		title: 'Employees',
		icon: 'users',
		roles: ["Admin", "HR"],
		children: [
			{ id: uuid(), link: '/pages/employee', name: 'All Employees' },
			// { id: uuid(), link: '/', name: 'Add Employees' }
		]
	},
	{
		id: uuid(),
		title: 'Projects',
		icon: 'briefcase',
		roles: ["Admin", "HR"],
		children: [
			{ id: uuid(), link: '/pages/projects', name: 'All Projects' },
			// { id: uuid(), link: '/', name: 'Add Projects' }
		]
	},
	{
		id: uuid(),
		title: 'Attendance',
		icon: 'book-open',
		roles: ["Admin", "HR"],
		children: [
			{ id: uuid(), link: '/pages/todayAttendances', name: 'Today Attendance' },
			{ id: uuid(), link: '/pages/employeeAttendances', name: 'Employees Attendance' }
		]
	},
	{
		id: uuid(),
		title: 'Clients',
		icon: 'user',
		roles: ["Admin"],
		children: [
			{ id: uuid(), link: '/pages/clients', name: 'All Clients' },
			// { id: uuid(), link: '/', name: 'Add Clients' }
		]
	},
	{
		id: uuid(),
		title: 'Leave Management',
		icon: 'clipboard',
		roles: ["Admin", "HR", "Employee"],
		children: [
			{ id: uuid(), link: '/pages/allLeaveRequest', name: 'All Leave Requests' },
			{ id: uuid(), link: '/pages/leaveBalance', name: 'Leave Balance' },
			// { id: uuid(), link: '/', name: 'New Leave Request' },
			{ id: uuid(), link: '/pages/leaveType', name: 'Leave Type' }
		]
	},
	{
		id: uuid(),
		title: 'Accounts',
		icon: 'book',
		roles: ["Admin"],
		children: [
			{ id: uuid(), link: '/pages/income', name: 'Income' },
			{ id: uuid(), link: '/', name: 'Expenses' },
			{ id: uuid(), link: '/', name: 'Invoices' }
		]
	},
	{
		id: uuid(),
		title: 'Departments',
		icon: 'layers',
		roles: ["Admin", "HR"],
		children: [
			{ id: uuid(), link: '/pages/allDepartment', name: 'All Departments' },
			// { id: uuid(), link: '/', name: 'Add Departments' }
		]
	},
	{
		id: uuid(),
		title: 'Payroll',
		icon: 'dollar-sign',
		roles: ["Admin", "HR"],
		children: [
			{ id: uuid(), link: '/', name: 'Payslip' },
			{ id: uuid(), link: '/pages/employeeSalary', name: 'Employees Salary' }
		]
	},
	{
		id: uuid(),
		title: 'Job',
		icon: 'command',
		roles: ["Admin", "HR"],
		children: [
			// { id: uuid(), link: '/', name: 'Add Job' },
			{ id: uuid(), link: '/pages/requirement', name: 'Requirements' },
			{ id: uuid(), link: '/pages/applicantList', name: 'Applicant List' }
		]
	},
	{
		id: uuid(),
		title: 'Tracker',
		icon: 'clock',
		link: "/pages/tracker",
		roles: ["Employee", "HR"]
	},
	{
		id: uuid(),
		title: 'Options',
		icon: 'list',
		link: "/pages/option",
		roles: ["Admin"]
	},
	{
		id: uuid(),
		title: 'Announcement',
		icon: 'mic',
		link: "/pages/announcement",
		roles: ["Employee", "Admin", "HR"]
	},
	{
		id: uuid(),
		title: 'Awards',
		icon: 'award',
		link: "/pages/awards",
		roles: ["Employee", "Admin", "HR"]
	}
];

export default DashboardMenu;
