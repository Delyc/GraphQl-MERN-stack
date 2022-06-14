import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <>
        <h1>404</h1>
        <p>You are lost 💀</p>
        <Link to='/'>Go back </Link>
        
    </>
  )
}
