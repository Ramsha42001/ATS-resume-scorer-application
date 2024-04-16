import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const UserContext = createContext();

export function UserContextProvider({ children }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (!user) {
            axios.get('https://ats-resume-scorer-application-2.onrender.com/profile').then(({ data }) => {
                setUser(data);
            });
        }
    }, []);

    return (
        <UserContext.Provider value={{ user }}>
            {children}
        </UserContext.Provider>
    );
}
