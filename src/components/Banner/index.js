import {AiOutlineClose} from 'react-icons/ai'
import ThemeContext from '../../context/ThemeContext'
import {
  BannerContainer,
  BannerContent,
  BannerImage,
  HeadingText,
  GetItNowButton,
  CloseButton,
} from './styledComponents'

const Banner = ({onClose}) => (
  <ThemeContext.Consumer>
    {({isDarkTheme}) => (
      <BannerContainer isDarkTheme={isDarkTheme} data-testid="banner">
        <CloseButton onClick={onClose} data-testid="close">
          <AiOutlineClose />
        </CloseButton>
        <BannerContent>
          <BannerImage
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
            alt="banner logo"
          />
          <HeadingText>
            Buy Nxt Watch Premium prepaid plans with UPI
          </HeadingText>
          <GetItNowButton>GET IT NOW</GetItNowButton>
        </BannerContent>
      </BannerContainer>
    )}
  </ThemeContext.Consumer>
)

export default Banner
