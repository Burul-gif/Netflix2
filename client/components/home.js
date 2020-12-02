import React, { useEffect, useState } from 'react'
import { Route, useParams } from 'react-router-dom'
import axios from 'axios'
import Readme from './readme'
import Header from './header'

const Home = () => {
  const { userName, repositoryName } = useParams()
  const [repoList, setRepoList] = useState([])
  const [readme, setReadme] = useState('')
  const [user, setUser] = useState([])
  useEffect(() => {
    if (repositoryName) {
      axios(`https://api.github.com/repos/${userName}/${repositoryName}/readme`, {
        headers: { Accept: 'application/vnd.github.VERSION.raw' }
      }).then(({ data }) => setReadme(data))
    }
    axios(`https://api.github.com/users/${userName}/repos`).then(({ data }) => setRepoList(data))
    axios(`https://api.github.com/users/${userName}`).then(({ data }) => setUser(data))
  }, [userName])
  return (
    <div>
      <Header userName={userName} repositoryName={repositoryName} user={user} repoList={repoList}/>
      <Route exact path="/:userName/:repositoryName" component={() => <Readme readme={readme} />} />
    </div>
  )
}

export default Home
