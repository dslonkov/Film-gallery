import React from 'react';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import {useState, useEffect, createContext } from "react";
import {AuthBlock} from "./parts/AuthBlock";
import {MainPage } from "./parts/MainPage";
import {MyFilms } from "./parts/MyFilms";
import {RootLayout} from "./parts/RootLayout";
import {PageNotFound} from "./parts/PageNotFound/PageNotFound";
import './App.css'

type User = {
  name: string;
  isLoggedIn: boolean;
}

type UserContextType = {
  user: User | null;
  setUser: (user: User | null) => void;
}

const defaultUserContext: UserContextType = {
  user: null,
  setUser: () => {}
};

export const UserContext = createContext<UserContextType>(defaultUserContext);

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: 'login',
        element: <AuthBlock />
      },
      {
        path: 'main',
        element:  <MainPage />
      },
      {
        path: 'myfilms',
        element:  <MyFilms />
      },
      {
        path: '*',
        element:  <PageNotFound />
      },
    ]
  }
])

export function App() {
  const [user, setUser] = useState(null);

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
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <RouterProvider router={router} />
    </UserContext.Provider>
  )
}
