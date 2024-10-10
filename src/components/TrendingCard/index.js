import {Link} from 'react-router-dom'

import {formatDistanceToNow} from 'date-fns'

import {
  id,
  TrendingCardContainer,
  Thumbnail,
  InfoContainer,
  Title,
  Channel,
  ViewsAndDate,
} from './styledComponents'
import ThemeContext from '../../context/ThemeContext'

const TrendingCard = ({details}) => {
  const {title, thumbnailUrl, channel, viewCount, publishedAt} = details
  const {name: channelName} = channel

  return (
    <ThemeContext.Consumer>
      {({isDarkTheme}) => (
        <Link to={`/videos/${id}`}>
          <TrendingCardContainer isDarkTheme={isDarkTheme}>
            <Thumbnail src={thumbnailUrl} alt="video thumbnail" />
            <InfoContainer>
              <Title isDarkTheme={isDarkTheme}>{title}</Title>
              <Channel>{channelName}</Channel>
              <ViewsAndDate>
                {viewCount} views • {formatDistanceToNow(new Date(publishedAt))}{' '}
                ago
              </ViewsAndDate>
            </InfoContainer>
          </TrendingCardContainer>
        </Link>
      )}
    </ThemeContext.Consumer>
  )
}

export default TrendingCard
