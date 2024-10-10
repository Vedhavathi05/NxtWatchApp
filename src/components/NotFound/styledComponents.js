// src/components/NotFound/styledComponents.js

import styled from 'styled-components'

export const NotFoundContainer = styled.div`
  display: flex;
  width: 65%;
  flex-direction: column;
  background-color: ${props =>
    props.isDarkTheme
      ? '#181818'
      : '#f9f9f9'}; /* Conditional background color */

  h1 {
    font-size: 24px;
    color: ${props => (props.isDarkTheme ? '#ffffff' : '#000000')};
    text-align: center;
  }

  p {
    font-size: 18px;
    color: ${props => (props.isDarkTheme ? '#d7d7d7' : '#606060')};
    text-align: center;
  }

  img {
    width: 100%;
    max-width: 600px; /* Maximum width for larger screens */
    height: auto;
    margin-bottom: 20px;

    @media (max-width: 768px) {
      max-width: 100%; /* Full width for smaller screens */
    }
  }
`
export const Displaying = styled.div`
  display: flex;
`
