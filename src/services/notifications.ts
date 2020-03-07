import { toast } from 'react-toastify';

type CrudOperation = 'save' | 'update' | 'delete';

const timeToClose = { autoClose: 2500 };

export const noteNotify = {
  success: (
    crudOperation: CrudOperation,
    notify = toast,
    time = timeToClose
  ) => {
    notify.success(`Your note was successfully ${crudOperation}d!`, time);
  },

  error: (crudOperation: CrudOperation, notify = toast, time = timeToClose) => {
    notify.error(
      `There was an error while attempting to ${crudOperation} your note`,
      time
    );
  },

  status: ({ status, data }: { status: number; data: CrudOperation }) => {
    if (status > 199 && status < 300) {
      noteNotify.success(data);
    } else {
      noteNotify.error(data);
    }
    return status > 199 && status < 300;
  },
};
