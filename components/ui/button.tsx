import React from 'react'

export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-gray-200 hover:bg-blue-300 hover:cursor-pointer hover:text-white text-black font-bold py-2 px-4 rounded">
      {children}
    </button>
  )
}
