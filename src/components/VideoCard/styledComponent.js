import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 250px;
  height: 320px;
  display: flex;
  flex-direction: column;
  margin: 10px;
  border-radius: 10px;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};
  box-shadow: ${props =>
    props.isDarkTheme
      ? '0px 4px 8px rgba(0, 0, 0, 0.5)'
      : '0px 4px 8px rgba(0, 0, 0, 0.1)'};
`

export const ThumbnailImage = styled.img`
  width: 100%;
  height: 150px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`

export const ChannelProfileImage = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`

export const VideoInfoContainer = styled.div`
  display: flex;
  padding: 10px;
  align-items: flex-start;
`

export const VideoTitle = styled.p`
  font-size: 16px;
  font-weight: 600;
  margin: 0;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`

export const ChannelName = styled.p`
  font-size: 14px;
  color: ${props => (props.isDarkTheme ? '#d7dfe9' : '#64748b')};
  margin: 5px 0;
`

export const ViewCountAndTime = styled.p`
  font-size: 12px;
  color: ${props => (props.isDarkTheme ? '#d7dfe9' : '#64748b')};
`
