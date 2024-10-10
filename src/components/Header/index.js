import {FiLogOut} from 'react-icons/fi'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import 'reactjs-popup/dist/index.css'
import ThemeContext from '../../context/ThemeContext'
import HambugerMenu from '../HambugerMenu'
import {
  HeaderContainer,
  LargeDevices,
  SmallDevices,
  ImageStyling,
  ButtonElement,
  ThemeButton,
  ProfileImage,
  IconButton,
  DisplayingSame,
  PopupContent,
  PopupButtonsContainer,
  CancelButton,
  ConfirmButton,
} from './styledComponents'

const Header = props => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const imageUrl = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
      const themeImageURL = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'

      const onConfirmLogout = close => {
        // Remove the jwt token from cookies and redirect to login page
        Cookies.remove('jwt_token')
        const {history} = props
        history.replace('/login')
        close() // Close the popup when Confirm is clicked
      }

      const toggleThemeButton = () => {
        toggleTheme()
      }

      return (
        <HeaderContainer isDarkTheme={isDarkTheme}>
          <LargeDevices>
            <ImageStyling src={imageUrl} alt="website logo" />
            <DisplayingSame>
              <ThemeButton onClick={toggleThemeButton} data-testid="theme">
                <img src={themeImageURL} alt="theme" />
              </ThemeButton>
              <ProfileImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <Popup
                modal
                trigger={
                  <ButtonElement color={isDarkTheme ? '#ffffff' : '#000000'}>
                    Logout
                  </ButtonElement>
                }
                className="popup-content"
              >
                {close => (
                  <PopupContent isDarkTheme={isDarkTheme}>
                    <p>Are you sure, you want to logout</p>
                    <PopupButtonsContainer>
                      <CancelButton onClick={() => close()}>
                        Cancel
                      </CancelButton>
                      <ConfirmButton onClick={() => onConfirmLogout(close)}>
                        Confirm
                      </ConfirmButton>
                    </PopupButtonsContainer>
                  </PopupContent>
                )}
              </Popup>
            </DisplayingSame>
          </LargeDevices>

          <SmallDevices>
            <ImageStyling src={imageUrl} alt="website logo" />
            <ThemeButton onClick={toggleTheme}>
              <img src={themeImageURL} alt="theme" />
            </ThemeButton>
            <HambugerMenu />
            <Popup
              modal
              trigger={
                <IconButton isDarkTheme={isDarkTheme}>
                  <FiLogOut />
                </IconButton>
              }
              className="popup-content"
            >
              {close => (
                <PopupContent isDarkTheme={isDarkTheme}>
                  <p>Are you sure you want to logout?</p>
                  <PopupButtonsContainer>
                    <CancelButton onClick={() => close()}>Cancel</CancelButton>
                    <ConfirmButton onClick={() => onConfirmLogout(close)}>
                      Confirm
                    </ConfirmButton>
                  </PopupButtonsContainer>
                </PopupContent>
              )}
            </Popup>
          </SmallDevices>
        </HeaderContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default withRouter(Header)
