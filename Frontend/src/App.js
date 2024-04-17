import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import axios from 'axios';
import { Toaster } from 'react-hot-toast';
import { UserContextProvider } from './context/userContext';
import HomePage from '../src/Pages/Home/Home';
import Navbar from './Pages/Navbar/Navbar';
import AboutPage from './Pages/About/About';
import LoginPage from './Pages/LoginPage/LoginPage';
import RegisterPage from '../src/Pages/RegisterPage/RegisterPage';

axios.defaults.baseURL ='https://ats-resume-scorer-application-2.onrender.com';
axios.defaults.withCredentials = true;

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get('/login', {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}` // Send token with request
          }
        });
        setIsLoggedIn(true); // User is authenticated
        console.log("logged in");
      } catch (error) {
        setIsLoggedIn(false); // User is not authenticated
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show a loading indicator while checking authentication status
  }

  return (
    <BrowserRouter>
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route
          path="/"
          element={
            isLoggedIn ? (
              <div>
                <Navbar />
                <HomePage />
              </div>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route
          path="/about"
          element={
            isLoggedIn ? (
              <div>
                <Navbar />
                <AboutPage />
              </div>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

