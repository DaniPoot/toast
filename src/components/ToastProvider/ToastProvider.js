import React from "react";
import { useEscapeKey } from "../../hooks/useEsacapeKey";

export const ToastContext = React.createContext();



function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])

  const handleEscape = React.useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey(handleEscape);

  const value = React.useMemo(() => {
    return {
      toasts,
      setToasts
    }
  }, [toasts])

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
