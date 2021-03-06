import React from 'react'
import Markdown from 'markdown-to-jsx'

const Readme = ({ readme }) => {
  return (
    <div className="m-4 py-3 px-6 bg-pink-900 border-4 border-grey-688 p-6">
      <Markdown>{readme}</Markdown>
    </div>
  )
}

export default Readme
