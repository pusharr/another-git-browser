import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { FaRegUser } from 'react-icons/fa'
import { GoLocation } from 'react-icons/go'
import { HiOutlineOfficeBuilding } from 'react-icons/hi'
import { RiTwitterLine } from 'react-icons/ri'
import SearchInput from './Repository'

import NotFound from './404'

function RepositoryList(props) {
  const { repos, user } = props
  const [findName, setFindName] = useState('')
  const { username } = useParams('')

  if (repos.length === 0)
    return (
      <div>
        <NotFound />
      </div>
    )

  return (
    <div>
      <div className="flex-row align-start ml-20 fixed ">
        <img
          src={user.avatar_url}
          alt="user_avatar"
          className="mt-4 mb-3 shadow-xl rounded-full h-48 w-48 items-start"
        />
        <div className="ml-10 flex-col text-gray-600 font-medium">
          <div className="flex">
            <FaRegUser className="mr-1 mt-1" />{' '}
            {
              <a
                href={`https://github.com/${user.login}`}
                className="hover:underline hover:text-blue-400"
                rel="noreferrer"
                target="_blank"
              >
                {user.name}
              </a>
            }
          </div>
          <div className="flex ">
            {user.location && <GoLocation className="mr-1 mt-1" />} {user.location && user.location}
          </div>
          <div className="flex">
            {user.company && <HiOutlineOfficeBuilding className="mr-1 mt-1" />}
            {user.company && user.company}
          </div>
          <div className="flex">
            {user.twitter_username && <RiTwitterLine className="mr-1 mt-1" />}
            {user.twitter_username && (
              <a
                href={`https://twitter.com/${user.twitter_username}`}
                className="hover:underline hover:text-blue-400"
                rel="noreferrer"
                target="_blank"
              >
                {user.twitter_username}
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center text-center flex-col font-sans p-0.5 ">
        <SearchInput repos={repos} findName={findName} setFindName={setFindName} />
        {repos
          .filter((repo) => {
            return repo.name.toLowerCase().includes(findName.toLocaleLowerCase())
          })

          .map((repository, index) => {
            return (
              <div key={index}>
                <p className="flex  my-2 hover:underline hover:text-purple-400 font-bold text-gray-700 text-2xl ">
                  <Link to={`/${username}/${repository.name}`}>{repository.name}</Link>
                </p>
              </div>
            )
          })}
      </div>
    </div>
  )
}

export default RepositoryList
