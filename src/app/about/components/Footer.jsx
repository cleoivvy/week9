import React from 'react'

export default function Footer() {
  return (
    <footer className='h-36 bg-slate-950 flex items-center justify-center text-white'>
      <p>&copy; Established {(new Date('10-26-2001').getFullYear())} -{(new Date().getFullYear())}</p> 
    </footer>
  )
}
