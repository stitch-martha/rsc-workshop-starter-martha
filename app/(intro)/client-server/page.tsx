import React from 'react'
import ClientComponent from './_components/ClientComponent'
import ServerComponent from './_components/ServerComponent'

export default function ClientServerPage() {
  // We can wrap our client components around server components without converting them
  return (
    <div>
      ClientServerPage
      <ClientComponent content={<ServerComponent />}>
        <ServerComponent />
      </ClientComponent>
    </div>
  )
}
