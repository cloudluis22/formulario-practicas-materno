import { useState } from 'react';

// Hook custom para manejar valores de formularios.

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const setForm = (values) => {
    setValues(values);
  }

  return [values, handleInputChange, reset, setForm];
};