import React from 'react'
import { prisma } from '@/db'


export default async function ServerComponent() {
  // We can access our db here because we are on the server
  // We cannot do client things on the server 
  const data = await prisma.contact.findMany()

  return (
    <div className='rounded border-2 border-red-500 p-4'>
     {data[0].first}
      ServerComponent
      </div>
  )
}
