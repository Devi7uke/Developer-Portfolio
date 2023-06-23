import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const HireMe = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden '>
      <div className='w-48 h-auto flex item-center justify-cemter relative'>
        <CircularText className='fill-dark animate-spin-slow dark:fill-light' />
        <Link href='mailto:brayan8003@gmail.com' className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border-dark w-20 h-20 rounded-full font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark  dark:text-dark dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light'>HireMe</Link>
      </div>
      
    </div>
  )
}

export default HireMe

/* https://youtu.be/Yw7yWHigGKI?list=PLZng_tgQCSQFgVa30DxyCWrdBbnW78yzW&t=4969 */