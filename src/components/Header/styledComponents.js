import styled from 'styled-components'

// Header container with dynamic background color based on theme
export const HeaderContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#181818' : '#f9f9f9')};
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
`

// Styling for larger devices (desktop and above)
export const LargeDevices = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

// Styling for smaller devices (tablets and below)
export const SmallDevices = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media screen and (min-width: 769px) {
    display: none;
  }
`

// Image styling for the website logo
export const ImageStyling = styled.img`
  width: 150px;
`

// Button element for Logout, with dynamic text color based on theme
export const ButtonElement = styled.button`
  background-color: transparent;
  border: 1px solid ${({color}) => color};
  color: ${({color}) => color};
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  &:hover {
    background-color: ${({color}) => color};
    color: ${({color}) => (color === '#ffffff' ? '#181818' : '#ffffff')};
  }
`

// Theme button styling for theme switch
export const ThemeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
`

// Profile image styling
export const ProfileImage = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
  margin-left: 20px;
`

// Icon button for smaller devices (logout icon)
export const IconButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  color: ${({isDarkTheme}) => (isDarkTheme ? '#ffffff' : '#000000')};
  font-size: 24px;
`

// Container for aligning elements (theme button, profile image, and logout button)
export const DisplayingSame = styled.div`
  display: flex;
  align-items: center;
`

// Popup content styling for logout modal
export const PopupContent = styled.div`
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#181818' : '#ffffff')};
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  color: ${({isDarkTheme}) => (isDarkTheme ? '#ffffff' : '#000000')};
`

// Popup button container for cancel and confirm buttons
export const PopupButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`

// Cancel button inside popup
export const CancelButton = styled.button`
  background-color: transparent;
  border: 1px solid #c3c3c3;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  color: #616e7c;
  &:hover {
    background-color: #f1f1f1;
  }
`

// Confirm button inside popup
export const ConfirmButton = styled.button`
  background-color: #3b82f6;
  border: none;
  color: #ffffff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #2563eb;
  }
`
