import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import SvgSprite from '../SvgSprite/SvgSprite';
import styles from './Input.module.css';
import { useForm } from '../../../hooks/useForm';

const Input = () => {
  const [focused, setFocused] = useState(false);
  const { values, handleCHange, setValues } = useForm({ search: '' });

  const onFocus = () => setFocused(true);
  const onBlur = () => {
    if (!values.search) setFocused(false);
  };
  const handleSearch = () => {
    setValues({ search: '' });
    setFocused(false);
  };

  useEffect(() => {
    console.log('search: ', values.search);
  }, [values.search]);

  return (
    <div className={styles.input}>
      <input
        className={styles.input__field}
        type="text"
        name="search"
        value={values.search || ''}
        onChange={handleCHange}
        placeholder="Поиск по городу"
        onFocus={onFocus}
        onBlur={onBlur}
      />
      <Button
        className={styles.input__button}
        htmlType="button"
        onClick={handleSearch}
      >
        {!focused ? (
          <SvgSprite
            className={`${styles['input__icon-btn']} ${styles['input__icon-btn_magnifier']}`}
            id="magnifier-svg"
          />
        ) : (
          <SvgSprite
            className={`${styles['input__icon-btn']} ${styles['input__icon-btn_close']}`}
            id="close-svg"
          />
        )}
      </Button>
    </div>
  );
};

export default Input;
