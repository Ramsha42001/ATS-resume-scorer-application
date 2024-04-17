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
    // Check if the user is logged in when the component mounts
    axios.get("/api/checkAuth")
      .then(response => {
        setIsLoggedIn(true); // Assuming the server returns true if the user is logged in
        setLoading(false);
      })
      .catch(error => {
        setIsLoggedIn(false);
        setLoading(false);
      });
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

