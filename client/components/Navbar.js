import React from 'react'
import { useParams } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { history } from '../redux'

function Navbar() {
  const { username } = useParams('')
  return (
    <div className="max-w-screen-xl m-auto flex items-center justify-between p-4 border-b-4">
      <div className="flex items-center justify-between p-4">
        <button
          type="button"
          onClick={() => history.push('/')}
          className="text-red-500 hover:underline hover:text-green-500 font-bold focus:outline-none"
        >
          <div>
            {username && (
              <div className="flex">
                <IoIosArrowBack className="mt-1" />
                To Search
              </div>
            )}
          </div>
        </button>
      </div>
    </div>
  )
}

export default Navbar
