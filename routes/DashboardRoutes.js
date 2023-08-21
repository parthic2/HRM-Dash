import { v4 as uuid } from 'uuid';

export const DashboardMenu = [
	{
		id: uuid(),
		title: 'Dashboard',
		icon: 'home',
		link: '/',
		roles: ['admin', 'hr', 'employee'],
	},
	// {
	// 	id: uuid(),
	// 	title: 'PAGES',
	// 	grouptitle: true
	// },
	{
		id: uuid(),
		title: 'Employees',
		icon: 'users',
		roles: ['admin', "hr"],
		children: [
			{ id: uuid(), link: '/pages/employee', name: 'All Employees' },
			// { id: uuid(), link: '/', name: 'Add Employees' }
		]
	},
	{
		id: uuid(),
		title: 'Projects',
		icon: 'briefcase',
		roles: ['admin', "hr"],
		children: [
			{ id: uuid(), link: '/pages/projects', name: 'All Projects' },
			// { id: uuid(), link: '/', name: 'Add Projects' }
		]
	},
	{
		id: uuid(),
		title: 'Attendance',
		icon: 'book-open',
		roles: ['admin', "hr"],
		children: [
			{ id: uuid(), link: '/pages/todayAttendances', name: 'Today Attendance' },
			{ id: uuid(), link: '/pages/employeeAttendances', name: 'Employees Attendance' }
		]
	},
	{
		id: uuid(),
		title: 'Clients',
		icon: 'user',
		roles: ['admin'],
		children: [
			{ id: uuid(), link: '/pages/clients', name: 'All Clients' },
			// { id: uuid(), link: '/', name: 'Add Clients' }
		]
	},
	{
		id: uuid(),
		title: 'Leave Management',
		icon: 'clipboard',
		roles: ['admin', "hr", "employee"],
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
		roles: ['admin'],
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
		roles: ['admin', "hr"],
		children: [
			{ id: uuid(), link: '/pages/allDepartment', name: 'All Departments' },
			// { id: uuid(), link: '/', name: 'Add Departments' }
		]
	},
	{
		id: uuid(),
		title: 'Payroll',
		icon: 'dollar-sign',
		roles: ['admin', "hr"],
		children: [
			{ id: uuid(), link: '/', name: 'Payslip' },
			{ id: uuid(), link: '/pages/employeeSalary', name: 'Employees Salary' }
		]
	},
	{
		id: uuid(),
		title: 'Job',
		icon: 'command',
		roles: ['admin', "hr"],
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
		roles: ['user', 'hr']
	},
	// {
	// 	id: uuid(),
	// 	title: 'Options',
	// 	icon: 'clock',
	// 	link: "/pages/option",
	// 	roles: ['admin']
	// },
	{
		id: uuid(),
		title: 'Announcement',
		icon: 'clock',
		link: "/pages/announcement",
		roles: ['employee']
	},
	{
		id: uuid(),
		title: 'Awards',
		icon: 'clock',
		link: "/pages/awards",
		roles: ['employee']
	},
	// {
	// 	id: uuid(),
	// 	title: 'Authentication',
	// 	icon: 'lock',
	// 	children: [
	// 		{ id: uuid(), link: '/authentication/sign-in', name: 'Sign In' },
	// 		{ id: uuid(), link: '/authentication/sign-up', name: 'Sign Up' },
	// 		{ id: uuid(), link: '/authentication/forget-password', name: 'Forget Password'}			
	// 	]
	// },
];

export default DashboardMenu;
