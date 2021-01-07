import React, { useState } from 'react';

export const TextInput = () => {
  const [state, setState] = useState<{ value: string }>({ value: '' });
  const value = state.value;

  const handleChange = (e: { target: { value: string } }) => {
    setState({ value: e.target.value });
  };

  return <input type="text" value={value} onChange={handleChange} />;
};
