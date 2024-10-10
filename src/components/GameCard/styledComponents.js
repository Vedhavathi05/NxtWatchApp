import styled from 'styled-components'

export const GameCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px;
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#181818' : '#f9f9f9')};
  border-radius: 8px;
  width: 250px;
  margin: 15px;
`

export const ThumbnailImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 8px;
`

export const GameTitle = styled.p`
  color: ${({isDarkTheme}) => (isDarkTheme ? '#f9f9f9' : '#181818')};
  font-size: 16px;
  margin-top: 10px;
  text-align: center;
`

export const ViewsText = styled.p`
  color: ${({isDarkTheme}) => (isDarkTheme ? '#c1c1c1' : '#606060')};
  font-size: 14px;
  margin-top: 5px;
`
