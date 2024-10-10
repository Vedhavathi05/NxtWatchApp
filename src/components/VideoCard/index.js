import {useContext} from 'react'
import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import ThemeContext from '../../context/ThemeContext'
import {
  CardContainer,
  ThumbnailImage,
  ChannelProfileImage,
  VideoTitle,
  ChannelName,
  VideoInfoContainer,
  ViewCountAndTime,
} from './styledComponent'

const VideoCard = ({details}) => {
  const {isDarkTheme} = useContext(ThemeContext)
  const {
    id,
    thumbnailUrl,
    title,
    channelName,
    channelProfileImageUrl,
    viewCount,
    publishedAt,
  } = details

  // Calculate how long ago the video was published
  const yearsAgo = formatDistanceToNow(new Date(publishedAt), {addSuffix: true})

  return (
    <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
      <CardContainer isDarkTheme={isDarkTheme}>
        <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
        <VideoInfoContainer>
          <ChannelProfileImage
            src={channelProfileImageUrl}
            alt="channel logo"
          />
          <div>
            <VideoTitle isDarkTheme={isDarkTheme}>{title}</VideoTitle>
            <ChannelName isDarkTheme={isDarkTheme}>{channelName}</ChannelName>
            <ViewCountAndTime isDarkTheme={isDarkTheme}>
              {viewCount} views • {yearsAgo}
            </ViewCountAndTime>
          </div>
        </VideoInfoContainer>
      </CardContainer>
    </Link>
  )
}

export default VideoCard
