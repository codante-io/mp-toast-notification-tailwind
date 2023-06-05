//@ts-nocheck
import { useState } from 'react';
import { useToast } from './components/ToastService';

export default function App() {
  const { positionY, setPositionY, positionX, setPositionX } = useToast();
  const toast = useToast();
  const [quote, setQuote] = useState('Hello, toast! I mean... World!');
  const [person, setPerson] = useState([
    {
      name: {
        first: 'Jonathan',
        last: 'Thomsen',
      },
      picture: {
        large: 'https://randomuser.me/api/portraits/men/84.jpg',
      },
    },
  ]);

  const handleClick = async () => {
    const audio = new Audio('https://www.fesliyanstudios.com/play-mp3/2673');
    audio.play();
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    setQuote(data.content);
    const randonUser = await fetch('https://randomuser.me/api/');
    const user = await randonUser.json();
    setPerson(user.results);

    toast.open(
      <div className='drop-shadow gap-2 flex  bg-gray-900 text-gray-200 rounded-2xl p-4 shadow-lg w-96 h-28'>
        <div className='flex items-center justify-between gap-4 border-2 border-transparent border-r-gray-700	'>
          <img
            className='rounded-full w-16 h-16'
            src={person[0].picture.large}
            alt='thumbnail'
          />
          <div className='border-r-gray-700	p-2 overflow-hidden'>
            <h1 className='font-bold w-44 text-lg truncate'>{`${person[0].name.first} ${person[0].name.last}`}</h1>
            <p className='text-base w-44 truncate'> {`${quote}`}</p>
          </div>
        </div>
      </div>,
      5000,
    );
  };

  return (
    <main className='bg-gray-800 flex flex-row min-h-screen justify-center items-center'>
      <div className='flex justify-center items-center flex-col'>
        <button
          className='bg-green-300 rounded-full w-52 h-14 text-lg text-gray-800 flex justify-center items-center' 
          onClick={handleClick}
        >
          <span>Mostrar Notificação</span>
        </button>

        <div className='flex flex-wrap justify-center gap-x-2 gap-y-4 p-4 w-80'>
          <button
            data-bg={positionX}
            className='hidden sm:flex justify-center items-center rounded-xl text-sm py-2 px-4 bg-white focus:bg-green-300 data-[bg=left-2]:bg-green-300'
            onClick={() => setPositionX('left-2')}
          >
            <span>Esquerda</span>
          </button>
          <button
            data-bg={positionX}
            className='hidden sm:flex justify-center items-center rounded-xl text-sm py-2 px-4 bg-white focus:bg-green-300  data-[bg=left-1/2 transform -translate-x-1/2]:bg-green-300' 
            onClick={() => setPositionX('left-1/2 transform -translate-x-1/2')}
          >
            <span>Centro</span>
          </button>
          <button
            data-bg={positionX}
            className='hidden sm:flex justify-center items-center rounded-xl text-sm py-2 px-4 bg-white focus:bg-green-300 data-[bg=right-2]:bg-green-300' 
            onClick={() => setPositionX('right-2')}
          >
            <span>Direita</span>
          </button>
          <button
            data-bg={positionY}
            className='flex justify-center items-center rounded-xl text-sm py-2 px-4 bg-white focus:bg-green-300 data-[bg=bottom-2]:bg-green-300' 
            onClick={() => setPositionY('bottom-2')}
          >
            <span>Borda Inferior</span>
          </button>
          <button
            data-bg={positionY}
            className='flex justify-center items-center rounded-xl text-sm py-2 px-4 bg-white focus:bg-green-300 data-[bg=top-2]:bg-green-300' 
            onClick={() => setPositionY('top-2')}
          >
            <span>Borda Superior</span>
          </button>
       
        </div>
      </div>
    </main>
  );
}
