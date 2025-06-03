import React from 'react';

const Button = ({children}: {children: React.ReactNode}) => {
    
    return (
        <button className='bg-gray-300 rounded-lg text-black px-3 py-2 shadow cursor-pointer hover:bg-gray-200 active:bg-white'>
            {children}
        </button>
    );
};

export default Button;