// Docs {@link https://tailwindcss.com/docs/text-color}
import React from 'react';

export function App() {
  return (
      <div className='container mx-auto rounded-xl overflow-hidden bg-gray-800 p-6 grid justify-items-center md:flex md:p-0'>
        <div className='w-24 h-24 bg-cover bg-center rounded-full md:rounded-none md:w-40 md:h-auto bg-[url(https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQkZ3bOUdSp0cVxBQhUCbMa0yIFoJPTNT1dGf3tErp0lK26u36G)]'></div>
        <div className='grid justify-items-center text-center md:justify-items-start md:p-6'>
          <div className='text-white mt-4 mb-2 md:text-left md:mt-0'>"We can't solve problems by using the same kind of thinking we used when we created them."</div>
          <div className= 'text-cyan-500 text-sm font-bold'>Albert Einstein</div>
          <div className='text-gray-500 text-sm font-light'>Theoretical Physicist</div>
       </div>
      </div>

  );
}

window.tailwind.config = {
  theme: {
    extend: {
         colors: {
        'my-indigo': '#4f45e5',
      },
    },
  },
};
