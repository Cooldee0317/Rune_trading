import { toast, ToastContent, ToastOptions, Slide, Id } from 'react-toastify';

export const formatNumber = (number: number) => {
  if (Math.abs(number) < 1000) {
    return Number(number).toFixed(3);
  }

  const units = ['', 'k', 'm', 'b', 't'];
  const unitIndex = Math.floor(Math.log10(Math.abs(number)) / 3);

  let formattedNumber = (number / Math.pow(1000, unitIndex)).toFixed(1);
  if (formattedNumber.endsWith('.0')) {
    formattedNumber = formattedNumber.slice(0, -2);
  }

  if (formattedNumber == 'NaN' || units[unitIndex] == 'undefined') {
    return `--`;
  } else {
    if (unitIndex == 0) {
      return `${Number(formattedNumber).toFixed(2)}`;
    } else {
      return `${formattedNumber}${units[unitIndex]}`;
    }
  }
};

export const defaultToastOptions: ToastOptions = {
  position: 'bottom-left',
  autoClose: 3000,
  hideProgressBar: true,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'colored',
  transition: Slide,
};

type ToastType = 'success' | 'error' | 'info' | 'warning' | 'default';

export const showToast = (
  type: ToastType,
  content: ToastContent,
  options: Partial<ToastOptions> = {}
): Id => {
  const optionsToApply = { ...defaultToastOptions, ...options };

  switch (type) {
    case 'success':
      return toast.success(content, optionsToApply);
    case 'error':
      return toast.error(content, optionsToApply);
    case 'info':
      return toast.info(content, optionsToApply);
    case 'warning':
      return toast.warn(content, optionsToApply);
    case 'default':
      return toast(content, optionsToApply);
    default:
      return toast(content, optionsToApply);
  }
};
