import ThemeContext from '../../context/ThemeContext'
import HeaderRightBar from '../HeaderRightBar'
import {NotFoundContainer, Displaying} from './styledComponents' // Import styled component

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      return (
        <Displaying>
          <HeaderRightBar />
          <NotFoundContainer isDarkTheme={isDarkTheme}>
            <div>
              <img
                src={
                  isDarkTheme
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                }
                alt="not found"
              />
              <h1>Page Not Found</h1>
              <p>We are sorry, the page you requested could not be found.</p>
            </div>
          </NotFoundContainer>
        </Displaying>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
