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
    axios.get("/api/checkAuth")
      .then(response => {
        setIsLoggedIn(true); 
        console.log("logged in")
      })
      .catch(error => {
        setIsLoggedIn(false);
        console.log("not logged in")
      });
  }, []);

  return (
    <BrowserRouter>
    {  isLoggedIn? <Navbar />: ''}
      <Toaster position="top-center" toastOptions={{ duration: 2000 }} />
      <Routes>
        <Route path="/" element={isLoggedIn ? <HomePage /> : <Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
