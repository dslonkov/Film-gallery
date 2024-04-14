import React from "react";
import {Button} from "../../components/Button";
import {Input} from "../../components/Input";
import styles from './searchBlock.module.css';

export const SearchBlock = () => {

  const handleClickBtn = () => {

  }

  return (
    <div className={styles['searchBlock']}>
      <Input
        placeholder={'Введите название'}
        withIcon
      />
      <Button onClick={handleClickBtn}>
        Найти
      </Button>
    </div>
  );
};
