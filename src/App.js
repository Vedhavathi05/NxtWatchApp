import {Component} from 'react'

import {Route, Switch} from 'react-router-dom'

import ThemeContext from './context/ThemeContext'

import Login from './components/Login'
import Home from './components/Home'
import Gaming from './components/Gaming'
import Trending from './components/Trending'
import SavedVideos from './components/SavedVideos'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import VideoItemDetails from './components/VideoItemDetails'

import Header from './components/Header'

import './App.css'

class App extends Component {
  state = {
    isDarkTheme: false,
    videosList: [],
  }

  toggleTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  addToVideos = items => {
    this.setState(prevState => ({
      videosList: [items, ...prevState.videosList],
    }))
  }

  render() {
    const {isDarkTheme, videosList} = this.state
    return (
      <div>
        <ThemeContext.Provider
          value={{
            isDarkTheme,
            videosList,
            toggleTheme: this.toggleTheme,
            addToVideos: this.addToVideos,
          }}
        >
          <Header />
          <Switch>
            <Route path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <Route component={NotFound} />
          </Switch>
        </ThemeContext.Provider>
      </div>
    )
  }
}

export default App
