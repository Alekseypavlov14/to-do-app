import './App.css';
import { useViewport } from './hooks/useViewport';
import { useEffect, useState } from 'react';
import Container from './components/Container/Container';

function App() {
  useViewport()

  const MAX_MOBILE_WIDTH = 500

  const [colorTheme, setColorTheme] = useState(true)

  useEffect(() => {
    localStorage.setItem('colorTheme', colorTheme)
  }, [colorTheme])

  useEffect(() => {
    setColorTheme(localStorage.getItem('colorTheme'))
  }, [])

  function computeImageSelector() {
    const width = window.innerWidth

    const device = width > MAX_MOBILE_WIDTH ? 'Desktop' : 'Mobile'

    const selector = device + (colorTheme ? 'Dark' : 'Light')

    return selector
  }

  const ThemeSelector = colorTheme ? 'Dark' : 'Light'
  const AppSelector = `App ${computeImageSelector()} ${ThemeSelector}`

  return (
    <div className={AppSelector}>
      <Container theme={colorTheme} setTheme={setColorTheme} />
    </div>
  );
}

export default App;
