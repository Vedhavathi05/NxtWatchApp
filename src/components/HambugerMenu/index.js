import Popup from 'reactjs-popup'
import {Link} from 'react-router-dom'
import {AiFillHome, AiOutlineFire} from 'react-icons/ai'
import {GiGamepad} from 'react-icons/gi'
import {MdVideoLibrary} from 'react-icons/md'
import {FaBars, FaTimes} from 'react-icons/fa'
import {UlContainer, CloseButton} from './styledComponents'

const HamburgerMenu = () => (
  <Popup
    modal
    trigger={
      <button type="button">
        <FaBars size={30} />
      </button>
    } // Hamburger Menu icon trigger
    className="popup-content"
  >
    {close => (
      <div>
        <CloseButton type="button" onClick={close}>
          <FaTimes size={24} /> {/* Close icon */}
        </CloseButton>
        <UlContainer>
          <li>
            <Link to="/" className="Link-class">
              <AiFillHome size={24} />
              Home
            </Link>
          </li>
          <li>
            <Link to="/trending" className="Link-class">
              <AiOutlineFire size={24} />
              Trending
            </Link>
          </li>
          <li>
            <Link to="/gaming" className="Link-class">
              <GiGamepad size={24} />
              Gaming
            </Link>
          </li>
          <li>
            <Link to="/saved-videos" className="Link-class">
              <MdVideoLibrary size={24} />
              Saved Videos
            </Link>
          </li>
        </UlContainer>
      </div>
    )}
  </Popup>
)

export default HamburgerMenu
