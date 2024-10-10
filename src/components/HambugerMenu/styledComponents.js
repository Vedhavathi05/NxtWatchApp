import styled from 'styled-components'

export const UlContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  .Link-class {
    text-decoration: none;
    font-size: 18px;
    color: #000;
    display: flex;
    align-items: center;
    gap: 10px;

    &:hover {
      color: #f00;
    }
  }
`

export const CloseButton = styled.button`
  background: none;
  border: none;
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`
