import React, { useEffect, useState } from 'react'
import { Switch, Route, useParams } from 'react-router-dom'

import Head from './head'
import Ball from './Loading'
import Main from './Main'
import Navbar from './Navbar'
import RepositoryList from './Repository-list'

// import wave from '../assets/images/wave.jpg'

const Home = () => {
  const [repos, setRepos] = useState([])
  const [profile, setProfile] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const { username } = useParams('')

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
  }, [username])

  if (isLoading) {
    return (
      <div className="justify-center mt-20 text-gray-800 font-bold text-center ">
        Fetching data... <Ball />
      </div>
    )
  }

  return (
    <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 bg-cover">
      <Navbar />
      <Head title="Hello" />
      <Switch>
        <Route exact path="/" component={() => <Main />} />
        <Route
          exact
          path="/:username"
          component={() => <RepositoryList username={username} repos={repos} user={profile} />}
        />
        {/* <PrivateRoute exact path="/hidden-route" component={() => <DummyView />} /> */}
        {/* <Route component={() => <NotFound />} /> */}
      </Switch>
    </div>
  )
}

Home.propTypes = {}

export default Home
