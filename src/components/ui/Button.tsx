import React from 'react'

interface ButtonProps{
    children : React.ReactNode;
    onClick? : () => void;
}

export default function Button({
    children,
    onClick,
} : ButtonProps){
    return(
         <button
      onClick={onClick}
      className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition"
    >
      {children}
    </button>
    );
}