import { toast } from 'react-toastify';

type CrudOperation = 'save' | 'update' | 'delete';

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
    notify.error(
      `There was an error while attempting to ${crudOperation} your note`,
      time
    );
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
};
