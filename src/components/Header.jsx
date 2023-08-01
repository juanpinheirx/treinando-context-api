import ThemeContext from '../context/ThemeContext';
import '../App.css';
import { useContext } from 'react';

export const Header = () => {
  const theme = useContext(ThemeContext);
  return (
    <><header id='header'>
      <h1>Matrix</h1>
    </header><button style={{
      float: 'right',
      borderRadius: '1vh',
      marginTop: '2vh',
      fontSize: '2vh',
      marginRight: '1vh'

    }} onClick={(e) => e && theme.triggerTheme()}>
        {theme.color === 'dark' ? '🌑' : '☀️'}
      </button>
      </>
  );  
};
