import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import ThemeContext from '../../context/ThemeContext'

import HeaderRightBar from '../HeaderRightBar'

import Card from '../Card'

import {
  FailureContainer,
  FailureHeading,
  FailureParagraph,
  RetryButton,
  FailureImage,
  Displaying,
} from './styledComponents'

class VideoItemDetails extends Component {
  state = {
    statusActive: 'INACTIVE',
    videoDetails: {},
  }

  componentDidMount() {
    this.callAPIForVideo()
  }

  callAPIForVideo = async () => {
    this.setState({statusActive: 'PENDING'})
    const jwtToken = Cookies.get('jwt_token')
    const {match} = this.props
    const {params} = match
    const {id} = params

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }

    const response = await fetch(`https://apis.ccbp.in/videos/${id}`, options)
    const data = await response.json()

    if (response.ok) {
      const updated = {
        channelName: data.video_details.channel.name,
        channelProfileImageUrl: data.video_details.channel.profile_image_url,
        subscriberCount: data.video_details.channel.subscriber_count,
        description: data.video_details.description,
        id: data.video_details.id,
        publishedAt: data.video_details.published_at,
        thumbnailUrl: data.video_details.thumbnail_url,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
      }
      this.setState({statusActive: 'SUCCESS', videoDetails: updated})
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
    const {videoDetails} = this.state
    return <Card details={videoDetails} />
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
              data-testid="videoItemDetails"
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

export default VideoItemDetails
