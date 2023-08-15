"use client"

import { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Styles from './ThemeChanger.module.css'

const ThemeChanger = () => {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className={Styles.toggleSwitch}>
      <input
        type="checkbox"
        id="themeToggle"
        checked={theme === 'dark'}
        onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
      <label htmlFor="themeToggle"></label>
    </div>
  )
}

export default ThemeChanger