import { useState } from 'react';

export const useForm = (inputValue) => {
  const [values, setValues] = useState(inputValue);

  const handleCHange = (e) => {
    const { value, name } = e.target;
    setValues({ ...values, [name]: value });
  };

  return { values, handleCHange, setValues };
};
