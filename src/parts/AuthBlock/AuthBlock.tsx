import {HeadingTitle} from "../../components/Heading";
import {Input} from "../../components/Input";
import {Button} from "../../components/Button";
import styles from './authBlock.module.css'
import {ChangeEvent, FormEvent, useContext, useState} from "react";
import {UserContext} from '../../App.jsx'
import React from "react";

export const AuthBlock: React.FC = () => {
  const { user, setUser } = useContext(UserContext);
  const [name, setName] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
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
