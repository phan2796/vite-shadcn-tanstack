import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Button } from './components/ui/button'
import { useTranslation } from 'react-i18next'
import { LANGUAGES } from './i18n'

function App() {
  const { t, i18n } = useTranslation()
  const [count, setCount] = useState(0)
  const [isDark, setIsDark] = useState(() => {
    // Check if dark mode is already set in localStorage or system preference
    const stored = localStorage.getItem('theme')
    if (stored) return stored === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    // Apply or remove dark class on document element
    if (isDark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggleTheme = () => {
    setIsDark((prev) => !prev)
  }

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language)
    localStorage.setItem('i18nextLng', language)
  }

  const currentLanguage = i18n.language as keyof typeof LANGUAGES

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <Button variant="default">Click me</Button>
      <Button variant="outline">Click me</Button>
      <Button variant="secondary">Click me</Button>
      <Button variant="ghost">Click me</Button>
      <Button variant="link">Click me</Button>
      <Button variant="destructive">Click me</Button>

      <br />
      <br />
      <br />
      {/* Language Switcher */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <Button 
          variant={currentLanguage === 'en' ? 'default' : 'outline'} 
          onClick={() => changeLanguage('en')}
        >
          {LANGUAGES.en}
        </Button>
        <Button 
          variant={currentLanguage === 'vi' ? 'default' : 'outline'} 
          onClick={() => changeLanguage('vi')}
        >
          {LANGUAGES.vi}
        </Button>
      </div>

      <Button variant="outline" onClick={toggleTheme}>
        {isDark ? '☀️ Light' : '🌙 Dark'}
      </Button>
      <h1>{t('title')}</h1>
      
    </>
  )
}

export default App
