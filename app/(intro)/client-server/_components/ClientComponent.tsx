
'use client'
import React from 'react'

type Props  ={
  children?: React.ReactNode
  content?: React.ReactNode
  mutateData: () => Promise<string >
}


export default function ClientComponent({children, content, mutateData }:Props) {
  // Without use client, we cannot use onClick, useState, use Effect, window.location, custom hooks

  return (
    <div className='border-2 border-blue-500 p-4'>
      {content}
    <button onClick={async()=> {
      const data = await mutateData()
      return alert(data)}
      }>Hello</button>
      {children}
    </div>
  )
}
