import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Notification = () => toast.error('Wrong search parameter');

export const Toast = () => {
  return <ToastContainer />;
};
