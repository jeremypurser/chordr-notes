import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  currentNoteSlice,
  FretNumber,
  Neck,
  State,
  StringNumber,
  Tuning,
} from '../state';
import { strToNum } from '../util';

export interface GuitarNeckProps {
  name: string;
  note: Neck;
  tuning: Tuning;
  callback: (e: React.MouseEvent) => void;
}

export default function guitarNeckContainer(
  GuitarNeck: React.ComponentType<GuitarNeckProps>
) {
  return () => {
    const currentNote = useSelector((state: State) => state.currentNote);

    const { actions } = currentNoteSlice;

    const dispatch = useDispatch();

    const handleFretClick = (e: React.MouseEvent) => {
      const [fret, string] = e.currentTarget.id.split('-').map(strToNum) as [
        FretNumber,
        StringNumber
      ];
      dispatch(actions.pressString({ fret, string }));
    };

    return <GuitarNeck {...currentNote} callback={handleFretClick} />;
  };
}
