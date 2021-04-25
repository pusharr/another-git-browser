import React from 'react'

function Repository({ findName, setFindName }) {
  return (
    <div>
      <input
        className=" mt-4 mb-4 w-96 h-10 text-1xl pl-2 p-2.5 text-center border-0 border-b-4 border-red-700 outline-none shadow-sm bg-transparent placeholder-gray-300"
        type="text"
        value={findName}
        placeholder="Type repository name..."
        onChange={(e) => setFindName(e.target.value)}
      />
    </div>
  )
}

export default Repository
