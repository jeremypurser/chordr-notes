import axios from 'axios';
import { noteNotify } from '../services';
import { CurrentNoteState } from '../state';
import { NoteCollectionState } from '../state/collection-slice';

const url = 'http://localhost:3001';

interface GetResponse {
  data: NoteCollectionState;
}

const NotesAPI = {
  retrieveNotes: async (
    userId: string,
    endpoint = url
  ): Promise<GetResponse> => {
    return await axios.get(`${endpoint}/${userId}/notes`);
  },
  saveNote: async (payload: CurrentNoteState, endpoint = url) => {
    return await axios
      .post(`${endpoint}/notes`, payload)
      .then(noteNotify.status)
      .catch(noteNotify.catchError);
  },
  editNote: async (
    noteId: string,
    payload: CurrentNoteState,
    endpoint = url
  ) => {
    return await axios
      .put(`${endpoint}/notes/${noteId}`, payload)
      .then(noteNotify.status)
      .catch(noteNotify.catchError);
  },
  deleteNote: async (noteId: string, endpoint = url) => {
    return await axios
      .delete(`${endpoint}/${noteId}`)
      .then(noteNotify.status)
      .catch(noteNotify.catchError);
  },
};

export default NotesAPI;
