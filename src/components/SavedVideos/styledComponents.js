import styled from 'styled-components'

export const SavedVideosContainer = styled.div`
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#181818' : '#f9f9f9')};
  min-height: 100vh;
  padding: 20px;
`

export const NoSavedVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#181818' : '#f9f9f9')};
  min-height: 100vh;
  padding: 20px;
  text-align: center;
`

export const NoSavedVideosImage = styled.img`
  width: 300px;
  height: 300px;
`

export const NoSavedVideosHeading = styled.h1`
  color: ${({isDarkTheme}) => (isDarkTheme ? '#ffffff' : '#000000')};
  font-size: 24px;
  margin-top: 20px;
`

export const NoSavedVideosText = styled.p`
  color: ${({isDarkTheme}) => (isDarkTheme ? '#cbd5e1' : '#7e858e')};
  font-size: 16px;
  margin-top: 10px;
`

export const VideosListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  list-style: none;
  padding: 0;
`

export const VideoItemCard = styled.li`
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#0f0f0f' : '#ffffff')};
  padding: 10px;
  border-radius: 10px;
  width: 250px;
`

export const VideoTitle = styled.p`
  color: ${({isDarkTheme}) => (isDarkTheme ? '#ffffff' : '#000000')};
  font-size: 18px;
  margin-top: 10px;
`
