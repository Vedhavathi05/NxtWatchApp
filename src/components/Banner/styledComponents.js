// styledComponents.js
import styled from 'styled-components'

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover; /* Change background based on theme */
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  width: 65%;
  height: 300px;

  @media (min-width: 768px) {
    width: 65%; /* Set width to 65% for devices above 768px */
  }
`

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column; /* Stack items in a column */
  align-items: flex-start; /* Align items to the left */
  width: 100%; /* Full width for the content */
  height: 100%; /* Full height for the content */
  justify-content: center; /* Center vertically */
`

export const BannerImage = styled.img`
  width: 180px; /* Adjust as needed */
  height: auto; /* Maintain aspect ratio */
  margin-bottom: 20px; /* Space between image and text */
`

export const HeadingText = styled.p`
  font-size: 18px;
  margin: 0; /* Remove default margin */
  margin-bottom: 20px; /* Space between heading and button */
  text-align: left; /* Align text to the left */
  color: ${props =>
    props.isDarkTheme
      ? '#ffffff'
      : '#000000'}; /* Change text color based on theme */
`

export const GetItNowButton = styled.button`
  color: #ffffff;
  background-color: #1e90ff; /* Button color */
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0c7ec2; /* Darker shade on hover */
  }
`

export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 24px; /* Adjust size of the close icon */
  position: absolute;
  right: 10px; /* Position it to the top right */
  top: 10px; /* Adjust vertical position */

  &:hover {
    opacity: 0.7; /* Slight opacity change on hover */
  }
`
