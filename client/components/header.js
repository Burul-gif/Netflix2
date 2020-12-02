import React, { useState } from 'react'
import { Link, Route } from 'react-router-dom'
import RepoList from './repoList'

const Header = ({userName, repoList, repositoryName, user }) => {
  const [search, setSearch] = useState('')
  const searchedName = repoList.filter((el) => el.name.includes(search))
  return (
    <div>
      <nav className="flex items-center justify-between flex-wrap bg-black p-6">
        <div className="flex items-center flex-shrink-0 text-red-700 mr-6">
          <span className="font-semibold text-red-700 tracking-tight uppercase">{userName}</span>
          <span className="font-semibold mx-4 text-red-700 tracking-tight">
            <img className="w-12 h-12 rounded-full" src={user.avatar_url} alt="" />
          </span>
          <span className="font-semibold text-xl tracking-tight mr-4"> users id: {user.id}</span>
          <span className="font-semibold text-xl tracking-tight mr-4">
            Location: {user.location}
          </span>
          <span className="font-semibold text-xl tracking-tight mr-4">Type: {user.type}</span>
        </div>
        <div className="w-full block justify-end flex-grow lg:flex lg:items-center lg:w-auto">
          <div>
            <Link
              to="/"
              className="inline-block text-sm justify px-4 py-2 leading-none border rounded text-red-700 border-pink-600  hover:border-transparent hover:text-teal-500 hover:bg-pink-800 m-4 lg:mt-0"
            >
              Back to main
            </Link>
            <div>
              {userName && !repositoryName && (
                <input
                  placeholder="search repo"
                  className="mr-8 placeholder-gray-600 focus:placeholder-gray-500 border-b text-red-700 border-white outline-none border-current bg-transparent"
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              )}
            </div>
            {repositoryName && (
              <Link
                to={`/${userName}`}
                className="inline-block text-sm px-4 py-2 leading-none border rounded border-pink-600 text-red-700 hover:border-transparent hover:text-teal-500 hover:bg-pink-800 mt-4 lg:mt-0"
              >
                Back to repo
              </Link>
            )}
          </div>
        </div>
      </nav>
      <Route
        exact
        path="/:userName"
        component={() => <RepoList userName={userName} searchedName={searchedName} />}
      />
    </div>
  )
}

export default Header
