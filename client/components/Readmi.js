import React from 'react'
import Markdown from 'markdown-to-jsx'
import '../assets/scss/viewRepos.scss'

function Readmi({ readme }) {
  return (
    <div>
      <Markdown className="text-center align-middle text-gray-800 text-lg">{readme}</Markdown>
    </div>
  )
}

export default Readmi
