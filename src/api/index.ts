import axios from 'axios';
import { toast } from 'react-toastify';
import { CurrentNoteState } from '../state';

const url = 'http://localhost:3001/notes';

const NotesAPI = {
  get: async (userId: string, endpoint = url) => {
    return await axios.get(`${endpoint}/${userId}`);
  },
  post: async (payload: CurrentNoteState, endpoint = url) => {
    return await axios
      .post(endpoint, payload)
      .then(({ status }) => {
        if (status === 201) {
          toast.success('Your note is saved!', { autoClose: 3000 });
        } else {
          toast.error('There was an error while attempting to save your note.');
        }
      })
      .catch(err => {
        console.error(err);
        // do something else
      });
  },
};

export default NotesAPI;
