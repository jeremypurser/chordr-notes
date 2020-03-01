import axios from 'axios';
import { toast } from 'react-toastify';
import { CurrentNoteState } from '../state';

type Endpoint = 'http://localhost:3001/notes';

const url = 'http://localhost:3001/notes';

const NotesAPI = {
  post: async (payload: CurrentNoteState, endpoint: Endpoint = url) => {
    return await axios
      .post(endpoint, payload)
      .then(({ status }) => {
        if (status === 201) {
          // do an action
          // clear form
          // toastify
          toast.success('Your note is saved!', { autoClose: 3000 });
        } else {
          // do something else
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
