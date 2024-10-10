import {Link} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'
import {
  GameCardContainer,
  id,
  ThumbnailImage,
  GameTitle,
  ViewsText,
} from './styledComponents'

const GameCard = ({details}) => {
  const {title, thumbnailUrl, viewCount} = details

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <Link to={`/videos/${id}`}>
            <GameCardContainer isDarkTheme={isDarkTheme}>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <GameTitle isDarkTheme={isDarkTheme}>{title}</GameTitle>
              <ViewsText isDarkTheme={isDarkTheme}>{viewCount} views</ViewsText>
            </GameCardContainer>
          </Link>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default GameCard
