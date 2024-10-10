import styled from 'styled-components'

export const CardContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#ffffff')};

  padding: 20px;
  width: 65%;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
`

export const VideoTitle = styled.h2`
  font-size: 1.5rem;
  margin: 10px 0;
`

export const ViewCountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`

export const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 15px 0;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: inherit;

    display: flex;
    align-items: center;

    &:hover {
      color: #007bff;
    }

    svg {
      margin-right: 5px;
    }
  }
`

export const ChannelInfo = styled.div`
  display: flex;
  align-items: center;
  margin: 10px 0;

  img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    margin-right: 10px;
  }
`

export const Description = styled.p`
  margin: 10px 0;
`
