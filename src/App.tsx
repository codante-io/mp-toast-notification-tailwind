//@ts-nocheck
import { useState } from 'react';
import { useToast } from './components/ToastService';

export default function App() {
  const toast = useToast();
  // const [positionY, setPositionY] = useState("top-2");
  // const [positionX, setPositionX] = useState("right-2");
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

  // to-do: add position state
  // const top = 'top-2'
  // const bottom = 'bottom-2'
  // const left = 'left-2'
  // const right = 'right-2'
  // const center = 'left-1/2 transform -translate-x-1/2'

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
          <div className='border-r-gray-700	p-2'>
            <h1 className='font-bold text-lg'>{`${person[0].name.first} ${person[0].name.last}`}</h1>
            <p className='text-base w-44 '> {`${quote.slice(0, 45)}...`}</p>
          </div>
        </div>
      </div>,
      5000,
    );
  };

  return (
    <main className='bg-gray-800 grid place-items-center h-screen'>
      <div>
        <button
          className='bg-green-300 rounded-full w-52 h-14 text-lg text-gray-800'
          onClick={handleClick}
        >
          Mostrar Notificação
        </button>
      </div>
    </main>
  );
}
