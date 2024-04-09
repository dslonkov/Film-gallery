import {Button} from "../../components/Button/Button.jsx";
import {Input} from "../../components/Input/Input.jsx";
import styles from './searchBlock.module.css';

export const SearchBlock = () => {

  const handleClickBtn = () => {
    console.log('clicked');
  }

  return (
    <div className={styles['searchBlock']}>
      <Input
        placeholder={'Введите название'}
        withIcon
      />
      <Button text={'Найти'} onClick={handleClickBtn}/>
    </div>
  );
};
