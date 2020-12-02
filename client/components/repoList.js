import React from 'react'
import { Link } from 'react-router-dom'

const RepoList = ({ userName, searchedName }) => {
  return (
    <div className="flex justify-between bg-gray-900 flex-wrap">
      {searchedName.map((el) => {
        return (
          <div
            className="m-6 text-red-700 py-3 px-6 bg-grey-900 border-b-2 border-red-900 p-10"
            key={el.id}
          >
            <Link to={`/${userName}/${el.name}`}>{el.name}</Link>
          </div>
        )
      })}
    </div>
  )
}

export default RepoList
