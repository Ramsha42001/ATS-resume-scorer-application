import './App.css';
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from './Pages/LoginPage/LoginPage';
import axios from 'axios';
import RegisterPage from '../src/Pages/RegisterPage/RegisterPage';
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from './context/userContext';
axios.defaults.baseURL ='http://localhost:8000'
axios.defaults.withCredentials=true;
function App() {
  return ( 
    <UserContextProvider >
    <BrowserRouter>
    <Toaster  position="top-center" toastOptions={{duration:2000}} />
      <Routes>
        <Route
          path="/login"
          element={<div><LoginPage /></div>}
        />
        {/* Define other routes here */}
        <Route
          path="/register"
          element={<div><RegisterPage /></div>}
        />
      </Routes>
    </BrowserRouter>
    </UserContextProvider>
  );
}

export default App;
