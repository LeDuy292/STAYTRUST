import React, { createContext, useState, useEffect, useContext } from 'react';
import authApi from '../api/authApi';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // Check if user is logged in on mount
    useEffect(() => {
        const token = localStorage.getItem('token');
        // Here you might want to call an API to validate the token/get user profile
        // For now, we just assume if token exists, user is logged in (simplified)
        if (token) {
            // ideally: const user = await authApi.getMe(); setUser(user);
            setUser({ token });
        }
        setLoading(false);
    }, []);

    const login = async (credentials) => {
        const res = await authApi.login(credentials);
        if (res.token) {
            localStorage.setItem('token', res.token);
            setUser({ token: res.token });
            return res;
        }
        throw new Error('Login failed');
    };

    const register = async (userData) => {
        /* Expected userData: { fullName, username, email, phone, password, role } */
        return await authApi.register(userData);
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, register, logout, loading }}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

// Custom hook to use auth context
export const useAuth = () => {
    return useContext(AuthContext);
};

export default AuthContext;
