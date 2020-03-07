import axios from 'axios';
import { toast } from 'react-toastify';
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
      .then(({ status }) => {
        if (status === 201) {
          toast.success('Your note is saved!', { autoClose: 3000 });
        } else {
          toast.error('There was an error while attempting to save your note.');
        }
      })
      .catch(err => {
        toast.error('There was an error while attempting to save your note.');
        console.error(err);
        // do something else
      });
  },
};

export default NotesAPI;
