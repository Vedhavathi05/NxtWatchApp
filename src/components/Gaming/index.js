import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import ThemeContext from '../../context/ThemeContext'

import HeaderRightBar from '../HeaderRightBar'

import GameCard from '../GameCard'

import {
  FailureContainer,
  FailureHeading,
  FailureParagraph,
  RetryButton,
  FailureImage,
  Displaying,
  UlContainer,
} from './styledComponents'

class Trending extends Component {
  state = {
    statusActive: 'INACTIVE',
    gameDetails: [],
  }

  componentDidMount() {
    this.callAPIForGame()
  }

  callAPIForGame = async () => {
    this.setState({statusActive: 'PENDING'})
    const jwtToken = Cookies.get('jwt_token')

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(`https://apis.ccbp.in/videos/gaming`, options)
    const data = await response.json()

    if (response.ok) {
      const convertedVideos = data.videos.map(video => ({
        id: video.id,
        title: video.title,
        thumbnailUrl: video.thumbnail_url,
        viewCount: video.view_count,
      }))

      console.log(convertedVideos)
      this.setState({statusActive: 'SUCCESS', gameDetails: convertedVideos})
    } else {
      this.setState({statusActive: 'FAILURE'})
    }
  }

  showVideos = isDarkTheme => {
    const {statusActive} = this.state
    switch (statusActive) {
      case 'PENDING':
        return this.showProgressView(isDarkTheme)
      case 'SUCCESS':
        return this.showSuccessView(isDarkTheme)
      case 'FAILURE':
        return this.showFailureView(isDarkTheme)
      default:
        return null
    }
  }

  showProgressView = isDarkTheme => {
    if (isDarkTheme === true) {
      return (
        <div className="loader-container" data-testid="loader">
          <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
        </div>
      )
    }
    return (
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#000000" height="50" width="50" />
      </div>
    )
  }

  showSuccessView = () => {
    const {gameDetails} = this.state
    return (
      <UlContainer>
        {gameDetails.map(each => (
          <li>
            <GameCard details={each} key={each.id} />
          </li>
        ))}
      </UlContainer>
    )
  }

  showFailureView = isDarkTheme => {
    const imageUrl = isDarkTheme
      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'

    return (
      <FailureContainer isDarkTheme={isDarkTheme}>
        <FailureImage src={imageUrl} alt="failure view" />
        <FailureHeading isDarkTheme={isDarkTheme}>
          Oops! Something Went Wrong
        </FailureHeading>
        <FailureParagraph isDarkTheme={isDarkTheme}>
          We are having some trouble to complete your request. Please try again.
        </FailureParagraph>
        <RetryButton isDarkTheme={isDarkTheme}>Retry</RetryButton>
      </FailureContainer>
    )
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value

          return (
            <Displaying
              data-testid="gaming"
              style={
                isDarkTheme
                  ? {backgroundColor: '#181818'}
                  : {backgroundColor: '#f9f9f9'}
              }
            >
              <HeaderRightBar />
              <h1>{isDarkTheme}</h1>
              {this.showVideos(isDarkTheme)}
            </Displaying>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Trending
