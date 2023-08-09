import Link from 'next/link'

const Header = () => {
  return(
    <>
      <div className='bg-svg'></div>
      <header id="header">
        <Link href='/'>devjobs</Link>
      </header>
    </>
  )
}

export default Header