import styled from 'styled-components'

export const TrendingCardContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 10px;
  width: 90%;
  border-bottom: 1px solid
    ${({isDarkTheme}) => (isDarkTheme ? '#383838' : '#e0e0e0')};
  background-color: ${({isDarkTheme}) => (isDarkTheme ? '#181818' : '#f9f9f9')};
`

export const Thumbnail = styled.img`
  width: 120px;
  height: 80px;
  margin-right: 15px;
`

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.p`
  color: ${({isDarkTheme}) => (isDarkTheme ? '#ffffff' : '#000000')};
  font-size: 16px;
  margin: 0;
`

export const Channel = styled.p`
  color: #909090;
  font-size: 14px;
  margin: 5px 0;
`

export const ViewsAndDate = styled.p`
  color: #909090;
  font-size: 12px;
  margin: 0;
`
