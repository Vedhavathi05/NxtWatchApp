import styled from 'styled-components'

export const ThemeContainer = styled.div`
  background-color: ${props => props.bgColor};
  width: 400px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding: 60px;
`
export const CustomButton = styled.button`
  border-radius: 5px;
  border: none;
  background-color: #3b82f6;
  color: white;
  padding: 5px;
`
export const LoginFormContainer = styled.div`
  background-color: ${props => props.bgColor};
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
