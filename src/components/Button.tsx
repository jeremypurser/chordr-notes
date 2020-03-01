import React, { MouseEvent } from 'react';

interface ButtonProps {
  text: string;
  color: 'is-primary' | 'is-warning';
  clickHandler: (e: MouseEvent) => void;
}
export default function Button({ text, color, clickHandler }: ButtonProps) {
  return (
    <div className="control">
      <button onClick={clickHandler} className={`button ${color}`}>
        {text}
      </button>
    </div>
  );
}
