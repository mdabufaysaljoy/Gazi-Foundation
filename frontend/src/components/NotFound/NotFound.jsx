import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
      <div>404 Not Found
          <Link to={"/"} >return to home page</Link>
    </div>
  )
}

export default NotFound