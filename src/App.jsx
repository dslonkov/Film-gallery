import './App.css'
import {HeadingTitle} from "./components/Heading/HeadingTitle.jsx";
import {Paragraph} from "./components/Paragraph/Paragraph";
import {Hero} from "./parts/Hero/Hero";
import {SearchBlock} from "./parts/SearchBlock/SearchBlock";
import {FilmCardBlock} from "./parts/FilmCardBlock/FilmCardBlock";
import {AuthBlock} from "./parts/AuthBlock/AuthBlock";
import {useState, useEffect, createContext} from "react";

export const UserContext = createContext();

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (name) => {
    if (!user) {
      localStorage.setItem('user', JSON.stringify({ name, isLogin: true }));
      setUser({ name, isLogin: true });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  useEffect(() => {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      const user = JSON.parse(userStr);
      setUser(user);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <div className='site-container'>
        <Hero
          user={user}
          handleLogout={handleLogout}
        />
        <HeadingTitle text={'Поиск'} />
        <Paragraph
          text={'Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.'}
          size={16}
        />
        <SearchBlock />
        <AuthBlock
          handleLogin={handleLogin}
        />
        <FilmCardBlock />
      </div>
    </UserContext.Provider>
  )
}

export default App
