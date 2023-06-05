//@ts-nocheck

import { useState } from 'react';
import ToastContext from './ToastService';


export default function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const open = (component, timeout = 5000) => {
    const id = Date.now();
    const timeoutID = setTimeout(() => close(id), timeout);
    setToasts(toasts => [...toasts, { id, component, timeoutID }]);

    return id
  };

  const close = (id, timeoutID) => {
    const audio = new Audio('https://www.fesliyanstudios.com/play-mp3/5482');
    audio.play();
    setToasts(toasts => toasts.filter(toast => toast.id !== id));
    clearTimeout(timeoutID);
  };

  return (
    <ToastContext.Provider value={{ open, close }}>
      {children}
      <div className='absolute top-2 right-2'>
        {toasts.map(({ id, component, timeoutID }) => (
          <div key={id} className='flex p-2 right-0'>
            <button
              onClick={() => close(id, timeoutID)}
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
