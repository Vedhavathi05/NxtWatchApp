import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`

export const FailureImage = styled.img`
  width: 300px;
  margin-bottom: 16px;
`

export const FailureHeading = styled.h1`
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  font-size: 24px;
  margin-bottom: 16px;
`

export const FailureParagraph = styled.p`
  color: ${props => (props.isDarkTheme ? '#cccccc' : '#606060')};
  font-size: 16px;
  text-align: center;
  margin-bottom: 32px;
`

export const RetryButton = styled.button`
  background-color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
  color: ${props => (props.isDarkTheme ? '#000000' : '#ffffff')};
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    opacity: 0.8;
  }
`

export const UlContainerStyling = styled.ul`
  width: 80%;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
`
export const Displaying = styled.div`
  display: flex;
`

export const UlContainer = styled.ul`
  width: 70%;
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
`
