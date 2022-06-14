import React from 'react'

export default function ClientInfo( {client}) {
  return (
    <>
        <h2>{client.name}</h2>
        <p>{client.email}</p>
        <p>{client.phone}</p>
        
    </>
  )
}
