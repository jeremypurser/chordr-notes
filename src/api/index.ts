import { CurrentNoteState } from '../state';
import axios from 'axios';

type Endpoint = 'http://localhost:3001/notes';

const url = 'http://localhost:3001/notes';

const NotesAPI = {
  post: async (payload: CurrentNoteState, endpoint: Endpoint = url) => {
    return await axios.post(endpoint, payload).then(({ status }) => {
      if (status === 201) {
        // do an action
      } else {
        // do something else
      }
    });
  },
};

export default NotesAPI;
