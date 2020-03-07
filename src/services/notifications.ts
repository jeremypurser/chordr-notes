import { toast } from 'react-toastify';

type CrudOperation = 'save' | 'update' | 'delete' | 'error';

const timeToClose = { autoClose: 2500 };

/** Services to use as callbacks on Promises for API layer */
export const noteNotify = {
  /** Displays success card */
  success: (
    crudOperation: CrudOperation,
    notify = toast,
    time = timeToClose
  ) => {
    notify.success(`Your note was successfully ${crudOperation}d!`, time);
  },

  /** Displays error card */
  error: (crudOperation: CrudOperation, notify = toast, time = timeToClose) => {
    const displayError =
      crudOperation === 'error'
        ? 'Something went wrong :('
        : `There wasn error while attempting to ${crudOperation} your note`;
    notify.error(displayError, time);
  },

  /** Displays appropriate card */
  status: ({ status, data }: { status: number; data: CrudOperation }) => {
    if (status > 199 && status < 300) {
      noteNotify.success(data);
    } else {
      noteNotify.error(data);
    }
    return status > 199 && status < 300;
  },

  /** Displays error */
  catchError: (err: Error) => {
    console.error(err);
    noteNotify.error('error');
    return false;
  },
};
