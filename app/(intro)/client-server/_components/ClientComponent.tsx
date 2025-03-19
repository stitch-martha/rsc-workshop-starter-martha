
'use client'
import React from 'react'

type Props  ={
  children?: React.ReactNode
  content?: React.ReactNode

}


export default function ClientComponent({children, content }:Props) {
  // Without use client, we cannot use onClick, useState, use Effect, window.location, custom hooks

  return (
    <div className='border-2 border-blue-500 p-4'>
      {content}
    <button onClick={()=> {return alert('Hello from the client')}}>Hello</button>
      {children}
    </div>
  )
}
