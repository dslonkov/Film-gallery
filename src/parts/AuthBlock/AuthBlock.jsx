import {HeadingTitle} from "../../components/Heading/HeadingTitle";
import {Input} from "../../components/Input/Input";
import {Button} from "../../components/Button/Button";
import styles from './authBlock.module.css'
import { useContext, useState } from "react";
import {UserContext} from '../../App.jsx'

export const AuthBlock = () => {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState('');

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (name.trim() === '') {
      setName('');
      return;
    }
    if (user) {
      setName('');
      return;
    }
    setUser({ name, isLoggedIn: true });
    setName('');
  };

  return (
    <div className={styles.authContainer}>
      <form className={styles.authBlock} onSubmit={handleSubmit}>
        <HeadingTitle text='Вход' />
        <Input placeholder='Ваше имя' value={name} onChange={handleChange}/>
        <Button type='submit'>
          Войти в профиль
        </Button>
      </form>
    </div>
  );
};
