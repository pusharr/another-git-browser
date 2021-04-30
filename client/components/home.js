import React, { useEffect, useState } from 'react'
import { Switch, Route, useParams } from 'react-router-dom'
import axios from 'axios'

import Head from './head'
import Ball from './Loading'
import Main from './Main'
import Navbar from './Navbar'
import Readmi from './Readmi'
import RepositoryList from './Repository-list'

// import wave from '../assets/images/wave.jpg'

const Home = () => {
  const { username, reponame } = useParams('')
  const [repos, setRepos] = useState([])
  const [profile, setProfile] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [readme, setReadme] = useState('')

  // const urlRadme = `http://api.github.com/repos/${username}/${reponame}/readme`

  // const fetchReadme = async (url) => {
  //   setIsLoading(true)

  //   try {
  //     const response = await fetch(url)
  //     const readmeMd = await response.json()
  //     if (!response.ok) {
  //       throw new Error('something wrong with fetching')
  //     }
  //     setReadme(readmeMd)
  //     setIsLoading(false)
  //   } catch (error) {
  //     setIsLoading(false)
  //     console.log(`fetch error : ${error.message}`)
  //   }
  // }
  // useEffect(() => {
  //   console.log('yo')
  //   if (reponame && username) {
  //     axios(urlRadme).then((res) => {
  //       setReadme(res.data)
  //     })
  //     // fetchReadme(urlRadme)
  //   }
  // }, [reponame, username])

  const fetchRepos = async () => {
    setIsLoading(true)
    try {
      const response = await fetch(`https://api.github.com/users/${username}/repos`)
      if (!response.ok) {
        throw new Error("check User's name")
      }
      const repositories = await response.json()
      setRepos(repositories)
      const responsePro = await fetch(`https://api.github.com/users/${username}`)
      const responseProfile = await responsePro.json()
      setIsLoading(false)
      setProfile(responseProfile)
    } catch (error) {
      setIsLoading(false)
      console.log(error)
    }
  }
  useEffect(() => {
    if (username) {
      fetchRepos()
    }
    if (reponame && username) {
      console.log('yo yo')
      axios(`https://raw.githubusercontent.com/${username}/${reponame}/master/README.md`).then(
        ({ data }) => {
          console.log(JSON.stringify(data))
          setReadme(data)
        }
      )
    }
  }, [username, reponame])

  if (isLoading) {
    return (
      <div className="justify-center mt-20 text-gray-800 font-bold text-center ">
        Fetching data... <Ball />
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-r from-yellow-400 via-blue-500 to-pink-500 min-h-screen ">
      <Navbar />
      <Head title="Hello" />
      <Switch>
        <Route exact path="/" component={() => <Main />} />
        <Route
          exact
          path="/:username"
          component={() => <RepositoryList username={username} repos={repos} user={profile} />}
        />
        <Route exact path="/:username/:reponame" component={() => <Readmi readme={readme} />} />
        {/* <PrivateRoute exact path="/hidden-route" component={() => <DummyView />} /> */}
        {/* <Route component={() => <NotFound />} /> */}
      </Switch>
    </div>
  )
}

Home.propTypes = {}

export default Home
