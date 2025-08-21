import { useState, useEffect } from 'react'
import './App.css'
import { Button } from '@/components/ui/button'
import { ThemeProvider } from '@/components/theme-provider'
import { ModeToggle } from './components/mode-toggle'
import { LogoButton } from './components/logo-button'
// import { Calendar } from '@/components/ui/calendar'
import './assets/fonts/Lexend/Lexend-Medium.ttf'

function App() {
  const [count, setCount] = useState(0)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Listen for changes to the theme (assumes ThemeProvider toggles 'dark' class on <body>)
    const updateTheme = () => {
      setIsDark(document.body.classList.contains('dark'))
    }
    updateTheme()
    const observer = new MutationObserver(updateTheme)
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] })
    return () => observer.disconnect()
  }, [])

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="flex justify-between space-x-5 items-center"
           >
        <ModeToggle />
        <LogoButton />
        <Button variant="link" className='p-6'>
          Login
        </Button>
      </div>
      {/* <div className="flex justify-center items-center w-full">
        <Calendar />
      </div> */}
      <div className="card">
        <div className="flex min-h-svh flex-col items-center justify-center">
          <Button onClick={() => setCount((count) => count + 1)}>count is {count}</Button>
        </div>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </ThemeProvider>
  )
}

export default App
