import { apiRequest } from './api.js';

// Mock user data (replace with actual API calls later)
const mockUsers = [
    {
        id: 1,
        email: 'user@example.com',
        password: 'password123', // In a real app, this would be hashed
        name: 'John Doe'
    }
];

// Login function
export async function login(email, password) {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 500));
    const user = mockUsers.find(u => u.email === email && u.password === password);
    if (user) {
        // Remove password before storing user data
        const { password, ...userWithoutPassword } = user;
        localStorage.setItem('user', JSON.stringify(userWithoutPassword));
        return userWithoutPassword;
    }
    throw new Error('Invalid credentials');
}

// Logout function
export function logout() {
    localStorage.removeItem('user');
}

// Check if user is logged in
export function isLoggedIn() {
    return !!localStorage.getItem('user');
}

// Get current user
export function getCurrentUser() {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
}

// Register function
export async function register({ email, fullName, phoneNumber, password, confirmPassword, fullAddress }) {
    try {
        const response = await apiRequest('/api/Account/Register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email,
                fullName,
                phoneNumber,
                password,
                confirmPassword,
                fullAddress
            })
        });
        console.log("response");
        console.log(response);
        return response;
    } catch (error) {
        if (error.message.includes('400')) {
            throw new Error('Registration failed. Please check your input and try again.');
        }
        throw error;
    }
}