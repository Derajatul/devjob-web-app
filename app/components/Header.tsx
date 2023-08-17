import Link from 'next/link'
import Image from 'next/image'
import Styles from './Header.module.css'
import ThemeChanger from './ThemeChanger'

const Header = () => {
  return(
    <>
      <div className={Styles.background}></div>
      <header className={Styles.header}>
        <Link href='/'>
          <Image width={100} height={100} layout='responsive' src='/logos/logo.svg' alt="logo" />
        </Link>
        <div className={Styles.theme}>
          <Image width={23} height={23} src="/icons/icon-sun.svg" alt='' />
          <ThemeChanger />
          <Image width={20} height={20} src="/icons/icon-moon.svg" alt='' />
        </div>
      </header>
    </>
  )
}

export default Header