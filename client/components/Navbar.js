import React from 'react'
import { useParams } from 'react-router-dom'
import { IoIosArrowBack } from 'react-icons/io'
import { history } from '../redux'

function Navbar() {
  const { username, reponame } = useParams('')
  return (
    <div className="max-w-screen-xl m-auto flex items-center justify-between p-4 ">
      <div className=" items-center justify-between p-4">
        <button type="button" onClick={() => history.push('/')} className=" focus:outline-none">
          <div>
            {username && (
              <div className="flex text-red-500 hover:text-green-500 font-bold ">
                <IoIosArrowBack className="mt-1" />
                To Search
              </div>
            )}
          </div>
        </button>
        <br />
        <div>
          {reponame && (
            <div
              className="flex text-red-500 hover:text-green-500 font-bold focus:outline-none cursor-pointer"
              onClick={() => history.push(`/${username}`)}
              onKeyDown={() => history.push(`/${username}`)}
              aria-hidden="true"
            >
              <IoIosArrowBack className="mt-1" />
              To Repositories
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar
