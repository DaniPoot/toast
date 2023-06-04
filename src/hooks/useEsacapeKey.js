import { useEffect } from 'react'

export const useEscapeKey = (callback) => {

  useEffect(() => {
    function handleEscape(event) {
      if (event.code === 'Escape') {
        callback(event);
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [callback])
}