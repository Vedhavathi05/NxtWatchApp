import styled from 'styled-components'

export const Navbar = styled.nav`
  width: 15%; /* Adjust the width as necessary */
  height: 90vh; /* Full height */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    display: none;
  }
`

export const UlContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

export const ListItem = styled.li`
  margin-bottom: 20px;
`

export const LinkText = styled.span`
  margin-left: 10px;
`

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`

export const ImageStyling = styled.img`
  width: 30px; /* Adjust size */
  height: 30px; /* Adjust size */
`

export const ContactSection = styled.section`
  margin-top: 20px;
  text-align: center;
`
