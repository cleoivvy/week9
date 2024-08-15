import React from 'react'

export default function footer() {
  return (
    <footer className='h-36 bg-slate-950 flex items-center justify-center text-white'>
      <p>&copy; Established {(new Date('26-10-2001').getFullYear())} -{(new Date().getFullYear())}</p> 
    </footer>
  )
}
