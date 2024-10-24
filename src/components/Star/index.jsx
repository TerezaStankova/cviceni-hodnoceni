import { useState } from 'react';
import './style.css';

export const Star = ({value, onSelect, glowing}) => {

  const starClass = glowing
    ? 'rating__star rating__star--on'
    : 'rating__star';

  return (
    <div onClick={() => { onSelect(value); }} className={starClass}></div>
  );
};
