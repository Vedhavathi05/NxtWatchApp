import {Component} from 'react'
import HeaderRightBar from '../HeaderRightBar'
import ThemeContext from '../../context/ThemeContext'
import {
  SavedVideosContainer,
  NoSavedVideosContainer,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosText,
  VideosListContainer,
  VideoItemCard,
  VideoTitle,
} from './styledComponents'

class SavedVideos extends Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {value => {
          const {videosList, isDarkTheme} = value

          // If there are no saved videos, show a "No Saved Videos" view
          if (videosList.length === 0) {
            return (
              <NoSavedVideosContainer
                isDarkTheme={isDarkTheme}
                data-testid="savedVideos"
                style={
                  isDarkTheme
                    ? {backgroundColor: '#181818'}
                    : {backgroundColor: '#f9f9f9'}
                }
              >
                <NoSavedVideosImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoSavedVideosHeading isDarkTheme={isDarkTheme}>
                  No Saved Videos
                </NoSavedVideosHeading>
                <NoSavedVideosText>
                  You can save your videos while watching them.
                </NoSavedVideosText>
              </NoSavedVideosContainer>
            )
          }

          // If there are saved videos, render the list of videos
          return (
            <SavedVideosContainer isDarkTheme={isDarkTheme}>
              <HeaderRightBar />
              <VideosListContainer>
                {videosList.map(video => (
                  <VideoItemCard key={video.id}>
                    <img src={video.thumbnailUrl} alt="video thumbnail" />
                    <VideoTitle isDarkTheme={isDarkTheme}>
                      {video.title}
                    </VideoTitle>
                  </VideoItemCard>
                ))}
              </VideosListContainer>
            </SavedVideosContainer>
          )
        }}
      </ThemeContext.Consumer>
    )
  }
}

export default SavedVideos
