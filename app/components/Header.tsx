import Link from 'next/link'
import Styles from './Header.module.css'
import ThemeChanger from './ThemeChanger'

const Header = () => {
  return(
    <>
      <div className={Styles.background}></div>
      <header className={Styles.header}>
        <Link href='/'>
          <img src='/logos/logo.svg' alt="logo" />
        </Link>
        <div className={Styles.theme}>
          <img src="/icons/icon-sun.svg"/>
          <ThemeChanger />
          <img src="/icons/icon-moon.svg"/>
        </div>
      </header>
    </>
  )
}

export default Header