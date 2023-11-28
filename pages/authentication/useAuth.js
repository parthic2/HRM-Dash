import { useState } from 'react';
import axios from 'axios';

const useAuth = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [selectedRole, setSelectedRole] = useState(''); // Default role is user

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleLogin = async (router) => {
        try {
            const numericRole =
                selectedRole === 'hr'
                    ? 1
                    : selectedRole === 'employee'
                        ? 2
                        : selectedRole === 'admin'
                            ? 3
                            : 0;

            const response = await axios.post('https://hrm.stackholic.io/api/login', {
                email: email,
                password: password,
                role: numericRole,
            });
            
            // Assuming your API returns a token upon successful login
            const { token, role } = response.data.data;

            // Store the token in localStorage or secure storage for future API requests
            localStorage.setItem("login-details", JSON.stringify({ token, role, email, password }));

            // Redirect the user after successful login
            const returnUrl = router.query.returnUrl || '/';
            router.push(returnUrl);
        } catch (error) {
            // Handle login failure, show an error message, etc.
            console.error('Login failed:', error);
        }
    };

    // Function to set default email based on selected role
    const setDefaultEmail = () => {
        if (selectedRole === "admin") {
            setEmail("14mscit050@gmail.com");
            setPassword("H@min#5079");
        } else if (selectedRole === "hr") {
            setEmail("stackholic@gmail.com");
            setPassword("Stack@123");
        } else {
            setEmail("");
            setPassword("");
        }
    }

    return {
        email,
        setEmail,
        password,
        setPassword,
        showPassword,
        setShowPassword,
        selectedRole,
        setSelectedRole,
        handleLogin,
        toggleShowPassword,
        setDefaultEmail
    };
};

export default useAuth;