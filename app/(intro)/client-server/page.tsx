import React from 'react'
import { prisma } from '@/db'
import ClientComponent from './_components/ClientComponent'
import ServerComponent from './_components/ServerComponent'

export default function ClientServerPage() {
  // We can wrap our client components around server components without converting them

  async function mutateData() {
    // The function will have a hidden API endpoint created for it and can be called from client
    // React 19 directive - this is a reference to an endpoint
    'use server'
    const data = await prisma.contact.findMany()
    return data[0].first || ''
  }

  return (
    <div>
      ClientServerPage
      <ClientComponent mutateData={mutateData} content={<ServerComponent />}>
        <ServerComponent />
      </ClientComponent>
    </div>
  )
}
