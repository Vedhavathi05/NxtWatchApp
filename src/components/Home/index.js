import {Component} from 'react'

import Cookies from 'js-cookie'

import Loader from 'react-loader-spinner'

import {FiSearch} from 'react-icons/fi'

import ThemeContext from '../../context/ThemeContext'

import HeaderRightBar from '../HeaderRightBar'
import VideoCard from '../VideoCard'

import {
  HomeContainer,
  SearchContainer,
  SearchInput,
  SearchButton,
  BannerSpace,
  Container,
  FailureContainer,
  FailureHeading,
  FailureParagraph,
  RetryButton,
  FailureImage,
  UlContainerStyling,
} from './styledComponents'

import Banner from '../Banner'

class Home extends Component {
  state = {
    isBannerVisible: true,
    statusActive: 'INACTIVE',
    searchInput: '',
    videosList: [],
  }

  componentDidMount() {
    this.callAPI()
  }

  // Handle search input changes and trigger API call on "Enter" key
  changeSearchInput = event => {
    this.setState({searchInput: event.target.value})
    if (event.key === 'Enter') {
      this.callAPI()
    }
  }

  // Call API to search for videos
  callAPI = async () => {
    const {searchInput} = this.state
    this.setState({statusActive: 'PENDING'})
    const jwtToken = Cookies.get('jwt_token')

    const url = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      const updatedData = data.videos.map(each => ({
        channelName: each.channel.name,
        channelProfileImageUrl: each.channel.profile_image_url,
        id: each.id,
        publishedAt: each.published_at,
        thumbnailUrl: each.thumbnail_url,
        title: each.title,
        viewCount: each.view_count,
      }))

      this.setState({statusActive: 'SUCCESS', videosList: updatedData})
    } else {
      this.setState({statusActive: 'FAILURE'})
    }
  }

  handleCloseBanner = () => {
    this.setState({isBannerVisible: false})
  }

  // Function to render different statuses like pending, success, or failure
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

  // Show loading spinner when videos are being fetched
  showProgressView = isDarkTheme => (
    <div className="loader-container" data-testid="loader">
      <Loader
        type="ThreeDots"
        color={isDarkTheme ? '#ffffff' : '#000000'}
        height="50"
        width="50"
      />
    </div>
  )

  // Render the list of videos when successfully fetched
  showSuccessView = isDarkTheme => {
    const {videosList} = this.state
    if (videosList.length === 0) {
      return (
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
            alt="no videos"
          />
          <h1>No Search results found</h1>
          <p>Try different key words or remove search filter</p>
          <button type="button">Retry</button>
        </div>
      )
    }
    return (
      <UlContainerStyling isDarkTheme={isDarkTheme}>
        {videosList.map(each => (
          <li key={each.id}>
            <VideoCard details={each} />
          </li>
        ))}
      </UlContainerStyling>
    )
  }

  // Show an error message if the video fetching fails
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
        <RetryButton isDarkTheme={isDarkTheme} onClick={this.callAPI}>
          Retry
        </RetryButton>
      </FailureContainer>
    )
  }

  render() {
    const {isBannerVisible} = this.state
    return (
      <ThemeContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <HomeContainer
              data-testid="home"
              style={
                isDarkTheme
                  ? {backgroundColor: '#181818'}
                  : {backgroundColor: '#f9f9f9'}
              }
            >
              <HeaderRightBar />
              <Container>
                <BannerSpace>
                  {isBannerVisible && (
                    <Banner onClose={this.handleCloseBanner} />
                  )}
                </BannerSpace>
                <SearchContainer>
                  <SearchInput
                    type="search"
                    placeholder="Search"
                    isDarkTheme={isDarkTheme}
                    onChange={this.changeSearchInput}
                    onKeyDown={this.changeSearchInput} // Detect Enter key
                  />
                  <SearchButton
                    isDarkTheme={isDarkTheme}
                    onClick={this.callAPI}
                    data-testid="searchButton" // Trigger search on button click
                  >
                    <FiSearch />
                  </SearchButton>
                </SearchContainer>
                {this.showVideos(isDarkTheme)}
              </Container>
            </HomeContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default Home
