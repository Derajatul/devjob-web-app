import Link from 'next/link'
import Styles from './Header.module.css'

const Header = () => {
  return(
    <>
      <div className={Styles.background}></div>
      <header className={Styles.header}>
        <Link href='/'>devjobs</Link>
      </header>
    </>
  )
}

export default Header