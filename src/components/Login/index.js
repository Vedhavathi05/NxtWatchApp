import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import ThemeContext from '../../context/ThemeContext'

import {
  ThemeContainer,
  CustomButton,
  LoginFormContainer,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    showPassword: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    console.log(errorMsg)
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    console.log('hello')
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    console.log(response)
    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
      console.log(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
      console.log(data.error_msg)
    }
  }

  renderPasswordField = isDarkTheme => {
    const {password, showPassword} = this.state
    return (
      <>
        <label
          className="input-label"
          htmlFor="password"
          style={isDarkTheme ? {color: '#f9f9f9'} : {color: '#181818'}}
        >
          PASSWORD
        </label>
        <br />
        <input
          type={showPassword ? 'text' : 'password'}
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
        <br /> <br />
      </>
    )
  }

  renderUsernameField = isDarkTheme => {
    const {username} = this.state
    return (
      <>
        <label
          className="input-label"
          htmlFor="username"
          style={isDarkTheme ? {color: '#f9f9f9'} : {color: '#181818'}}
        >
          USERNAME
        </label>
        <br />
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
        <br />
        <br />
      </>
    )
  }

  toggleShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  render() {
    const {showSubmitError, errorMsg} = this.state
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <div>
        <ThemeContext.Consumer>
          {value => {
            const {isDarkTheme} = value
            const imageUrl = isDarkTheme
              ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
              : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            return (
              <LoginFormContainer bgColor={isDarkTheme ? '#231f20' : '#f9f9f9'}>
                <ThemeContainer bgColor={isDarkTheme ? '#181818' : '#f9f9f9'}>
                  <form className="form-container" onSubmit={this.submitForm}>
                    <img src={imageUrl} alt="website logo" />
                    <br />
                    <div className="input-container">
                      {this.renderUsernameField(isDarkTheme)}
                    </div>
                    <div className="input-container">
                      {this.renderPasswordField(isDarkTheme)}
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id="chechboxPassword"
                        onChange={this.toggleShowPassword}
                      />
                      <label
                        htmlFor="chechboxPassword"
                        style={
                          isDarkTheme ? {color: '#f9f9f9'} : {color: '#181818'}
                        }
                      >
                        Show Password
                      </label>
                    </div>
                    <CustomButton type="submit">Login</CustomButton>
                    {showSubmitError && (
                      <p
                        className="error-message"
                        style={{color: 'red'}}
                      >
                        *{errorMsg}
                      </p>
                    )}
                  </form>
                </ThemeContainer>
              </LoginFormContainer>
            )
          }}
        </ThemeContext.Consumer>
      </div>
    )
  }
}

export default Login
