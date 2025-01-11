import {ButtonHTMLAttributes} from 'react';

export const Button = ({...props}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <div className='flex flex-col text-white w-60'>
      <button {...props} className='text-xl min-w-[50%] rounded-full p-4 bg-green-800 hover:bg-green-700 active:bg-green-500 text-white' />
    </div>
  );
};


