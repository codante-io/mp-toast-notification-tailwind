//@ts-nocheck

import { useState } from 'react';
import ToastContext from './ToastService';


export default function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  

  const open = (component, timeout = 5000) => {
    const id = Date.now();
    setToasts(toasts => [...toasts, { id, component }]);
    setTimeout(() => close(id), timeout);
    return id
  };

  const close = (id) => {
    setToasts(toasts => toasts.filter(toast => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ open, close }}>
      {children}
      <div className='absolute top-2 right-2'>
        {toasts.map(({ id, component }) => (
          <div key={id} className='flex p-2 right-0'>
            <button
              onClick={() => close(id)}
              className='absolute right-6 mt-10 p-1 rounded-lg text-green-300 text-xl z-10'
            >
              Close
            </button>
            {component} 
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}
