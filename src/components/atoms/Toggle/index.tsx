import React, { useState } from 'react';

export const Toggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = () => {
    setIsOpen((open) => !open);
  };

  return (
    <>
      <button onClick={handleChange}>Toggle Button</button>
      <div>{isOpen ? 'ON ' : 'OFF'}</div>
    </>
  );
};
