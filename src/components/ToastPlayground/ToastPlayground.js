import React from 'react';

import Button from '../Button';
import ToastVariants from '../ToastVariants/'
import ToastShelf from '../ToastShelf'
import { ToastContext } from '../ToastProvider/ToastProvider';

import styles from './ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('')
  const [variant, setVariant] = React.useState(VARIANT_OPTIONS[0])
  const { setToasts } = React.useContext(ToastContext);

  function handleVariant (e) {
    setVariant(e.target.value)
  }

  function handlePopToast () {
    const toast = {
      message,
      variant,
    }
    setToasts((toasts) => [...toasts, toast])
    setMessage('')
    setVariant(VARIANT_OPTIONS[0])
  }

  function handleTextArea (e) {
    setMessage(e.target.value)
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea id="message" value={message} className={styles.messageInput} onChange={handleTextArea} />
          </div>
        </div>

        <ToastVariants variant={variant} handleVariant={handleVariant} />
        <div className={styles.row}>
          <div className={styles.label} />
          <div
            className={`${styles.inputWrapper} ${styles.radioWrapper}`}
          >
            <Button onClick={handlePopToast} >Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
