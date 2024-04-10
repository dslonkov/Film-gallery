import './App.css'
import { Routes, Route, Navigate, useNavigate} from "react-router-dom";
import {useState, useEffect, createContext } from "react";
import {AuthBlock} from "./parts/AuthBlock/AuthBlock";
import {MainPage } from "./parts/MainPage/MainPage.jsx";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr && userStr !== 'undefined') {
      const user = JSON.parse(userStr);
      setUser(user);
    }
  }, []);

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/');
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
        <Routes>
          <Route path="/" element={user ? <MainPage /> : <Navigate to="/auth" />} />
          <Route path="/auth" element={<AuthBlock />} />
        </Routes>
    </UserContext.Provider>
  )
}

export default App
