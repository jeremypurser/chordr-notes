import React, { MouseEvent } from 'react';

export default function Button({
  text,
  clickHandler,
}: {
  text: string;
  clickHandler: (e: MouseEvent) => void;
}) {
  return (
    <div className="control">
      <button onClick={clickHandler} className="button is-primary">
        {text}
      </button>
    </div>
  );
}
