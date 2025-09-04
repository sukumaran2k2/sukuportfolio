import { useEffect, useState } from 'react'
import { FaMoon, FaSun } from 'react-icons/fa'

export default function DarkModeToggle() {
  const [dark, setDark] = useState(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved) return saved === 'dark'
      return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    } catch {
      return false
    }
  })

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [dark])

  return (
    <button onClick={() => setDark(!dark)} className="rounded-full p-2 bg-brand text-white dark:bg-gray-800 dark:text-yellow-400 shadow-md">
      {dark ? <FaSun /> : <FaMoon />}
    </button>
  )
}
