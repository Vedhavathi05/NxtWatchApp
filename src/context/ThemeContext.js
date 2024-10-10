import react from 'react'

const ThemeContext = react.createContext({
  isDarkTheme: true,
  videosList: [],
  toggleTheme: () => {},
  addToVideos: () => {},
})

export default ThemeContext
