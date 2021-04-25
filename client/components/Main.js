import React, { useState } from 'react'
import { history } from '../redux'

function Main() {
  const [user, setUser] = useState('')
  const handleClick = () => {
    history.push(`/${user}/`)
  }
  return (
    <div className="mt-20 flex justify-center items-center text-center flex-col font-sans p-0.5 g-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-cover">
      <form action="" onSubmit={handleClick}>
        <input
          type="text"
          placeholder="GitHub UserName..."
          value={user}
          className="mt-4 w-80 mb-8 h-10 text-1xl pl-2 p-2.5 text-center border-0 border-b-4 border-grey-400 outline-none shadow-sm bg-opacity-0 bg-transparent text-white placeholder-gray-300"
          onChange={(e) => setUser(e.target.value)}
        />
        <br />
        <button
          type="submit"
          className="  text-center rounded-lg h-14 w-36 text-gray-700 bg-gray-300 hover:bg-gray-400 hover:shadow-md hover:text-white outline-none border-black b-2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 focus:outline-none"
        >
          Search
        </button>
      </form>
    </div>
  )
}

export default Main
