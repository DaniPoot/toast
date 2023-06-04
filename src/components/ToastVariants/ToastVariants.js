import React from "react"
import styles from '../ToastPlayground/ToastPlayground.module.css';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error']

function ToastVariants({ variant, handleVariant }) {

  return (
    <div className={styles.row}>
      <div className={styles.label}>Variant</div>
        <div
          className={`${styles.inputWrapper} ${styles.radioWrapper}`}
        >
          {VARIANT_OPTIONS.map((varian) => (
            <label 
              htmlFor={`variant-${varian}`}
              key={varian}
            >
              <input
                id={`variant-${varian}`}
                type="radio"
                name="variant"
                value={varian}
                onChange={handleVariant}
                checked={variant === varian}
              />
              { varian }
            </label>
          ))}
      </div>
    </div>
  )
}

export default ToastVariants;
