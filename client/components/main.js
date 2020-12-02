import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
  const [user, setUser] = useState('')
  return (
    <div className="flex items-center justify-center bg-red-900 h-screen">
      <input
        type="text"
        className="m-4 p-2 border-solid  bg-pink-900 border-2  outline-none"
        value={user}
        onChange={(e) => setUser(e.target.value)}
      />
      <Link className="m-6 p-2 pr-8 pl-8 border-2 bg-pink-900" to={`/${user}`}>
        View
      </Link>
    </div>
  )
}

export default Main
