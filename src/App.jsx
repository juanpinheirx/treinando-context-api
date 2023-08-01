import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Image } from "./components/Image";
import ThemeContext from "./context/ThemeContext";
import { useState } from 'react';
import "./App.css";

export const App = () => {
  const [themeColor, setThemecolor] = useState('light');
  const triggerTheme = () => setThemecolor(themeColor === 'light' ? 'dark' : 'light');
  return (
    <ThemeContext.Provider value={{
      color: themeColor,
      triggerTheme: triggerTheme,
    }}>
      <div className='App' style={{
        backgroundColor: themeColor === 'light' ? '#fff' : '#505050',
      }}>
        <Header />
        <Image />
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};
