import React, { MouseEvent } from 'react';

interface ButtonProps {
  text: string;
  clickHandler: (e: MouseEvent) => void;
}
export default function Button({ text, clickHandler }: ButtonProps) {
  return (
    <div className="control">
      <button onClick={clickHandler} className="button is-primary">
        {text}
      </button>
    </div>
  );
}
