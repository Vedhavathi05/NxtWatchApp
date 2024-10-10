import {Link} from 'react-router-dom'
import {AiFillHome, AiOutlineFire} from 'react-icons/ai'
import {GiGamepad} from 'react-icons/gi'
import {MdVideoLibrary} from 'react-icons/md'
import {
  Navbar,
  UlContainer,
  ImageContainer,
  ImageStyling,
  ContactSection,
  ListItem,
  LinkText,
} from './styledComponent'
import ThemeContext from '../../context/ThemeContext'

const HeaderRightBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      const bgColor = isDarkTheme ? '#181818' : '#f9f9f9'
      const textColor = isDarkTheme ? '#ffffff' : '#000000'

      return (
        <Navbar style={{backgroundColor: bgColor}}>
          <UlContainer>
            <ListItem>
              <Link to="/" className="Link-class">
                <AiFillHome size={24} color={textColor} />
                <LinkText style={{color: textColor}}>Home</LinkText>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/trending" className="Link-class">
                <AiOutlineFire size={24} color={textColor} />
                <LinkText style={{color: textColor}}>Trending</LinkText>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/gaming" className="Link-class">
                <GiGamepad size={24} color={textColor} />
                <LinkText style={{color: textColor}}>Gaming</LinkText>
              </Link>
            </ListItem>
            <ListItem>
              <Link to="/saved-videos" className="Link-class">
                <MdVideoLibrary size={24} color={textColor} />
                <LinkText style={{color: textColor}}>Saved Videos</LinkText>
              </Link>
            </ListItem>
          </UlContainer>
          <ContactSection>
            <p style={{color: textColor}}>CONTACT US</p>
            <ImageContainer>
              <ImageStyling
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <ImageStyling
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <ImageStyling
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </ImageContainer>
            <p style={{color: textColor}}>
              Enjoy! Now to see your channels and recommendations!
            </p>
          </ContactSection>
        </Navbar>
      )
    }}
  </ThemeContext.Consumer>
)

export default HeaderRightBar
