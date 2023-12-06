import {toast} from 'react-toastify';
export const useQueryErrorHandler = (error: unknown): void => {
  const title =
    error instanceof Error ? error.message : 'Error connecting to server';

  // Close all existing toasts
  toast.dismiss();

  // Display the new toast
  toast.error(title, {
    position: 'top-right',
    autoClose: 5000, // Close after 5 seconds
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
};
