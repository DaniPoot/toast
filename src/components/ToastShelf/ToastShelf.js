import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';
import { ToastContext } from '../ToastProvider/ToastProvider';

function ToastShelf() {
  const { toasts, setToasts } = React.useContext(ToastContext);

  console.log('Toast Render')

  const handleClose = React.useCallback((index) => {
    const newToasts = [...toasts]
    newToasts.splice(index, 1)
    setToasts(newToasts)
  }, [toasts, setToasts])

  return (
    <ol className={styles.wrapper}
      role='region'
      aria-live='polite'
      aria-label='Notification'
    >
      {
        toasts.map((toast, index) => {
          return (
            <li 
              className={styles.toastWrapper}
              key={`toast-${index}-key`}
            >
              <Toast
                variant={toast.variant}
                handleClose={() => handleClose(index)}
              >
                {toast.message}
              </Toast>
            </li>
          )
        })
      } 
    </ol>
  );
}

export default React.memo(ToastShelf);
