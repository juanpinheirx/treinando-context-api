import { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'
export const Footer = () => {
  const theme = useContext(ThemeContext);
  return (
    <div style={{
      marginTop: '10vh'
    }}>
      <h4>
        Tema atual: {theme.color}
      </h4>
    </div>
  )
}
