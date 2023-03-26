import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <h1>This is About us page </h1>
      <Link to="/">
            Go to the Home page
      </Link>

      <Link to="/Contact">
            Go to the contact page
      </Link>

    </div>
  )
}
