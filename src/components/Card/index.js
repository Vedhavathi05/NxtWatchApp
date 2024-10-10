import {Component} from 'react'
import {formatDistanceToNow} from 'date-fns'
import {FaThumbsUp, FaThumbsDown, FaBookmark} from 'react-icons/fa'
import ReactPlayer from 'react-player'

import ThemeContext from '../../context/ThemeContext'
import {
  CardContainer,
  VideoTitle,
  ViewCountContainer,
  ActionButtons,
  ChannelInfo,
  Description,
} from './styledComponents'

class Card extends Component {
  state = {
    isLiked: false,
  }

  toggleLike = () => {
    this.setState(prevState => ({isLiked: !prevState.isLiked}))
  }

  render() {
    const {details} = this.props
    const {isLiked} = this.state // Destructure isLiked from state

    const {
      channelProfileImageUrl,
      channelName,
      subscriberCount,
      description,
      publishedAt,
      title,
      viewCount,
      videoUrl, // Ensure to get videoUrl from details
    } = details

    const {isDarkTheme, addToVideos} = this.context // Getting theme context

    const saveVideo = () => {
      addToVideos(details)
    }

    return (
      <CardContainer isDarkTheme={isDarkTheme}>
        <ReactPlayer url={videoUrl} /> {/* Use videoUrl from details */}
        <VideoTitle>{title}</VideoTitle>
        <ViewCountContainer>
          <p>{viewCount} views</p>
          <p>{formatDistanceToNow(new Date(publishedAt))} ago</p>
        </ViewCountContainer>
        <ActionButtons>
          <button type="button" onClick={this.toggleLike}>
            {isLiked ? (
              <>
                <FaThumbsUp /> Unlike
              </>
            ) : (
              <>
                <FaThumbsUp /> Like
              </>
            )}
          </button>
          <button type="button">
            <FaThumbsDown /> Dislike
          </button>
          <button type="button" onClick={saveVideo}>
            <FaBookmark /> Save
          </button>
        </ActionButtons>
        <hr />
        <ChannelInfo>
          <img src={channelProfileImageUrl} alt="channel logo" />
          <div>
            <h3>{channelName}</h3>
            <p>{subscriberCount} subscribers</p>
          </div>
        </ChannelInfo>
        <Description>{description}</Description>
      </CardContainer>
    )
  }
}

Card.contextType = ThemeContext // Use theme context

export default Card
