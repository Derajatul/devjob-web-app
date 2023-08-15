import Link from 'next/link'
import Styles from './PrimaryButton.module.css'

const PrimaryButton = ({onHref,children}) =>{
  return(
    <>
      <Link href={onHref} className={Styles.button}>{children}</Link>
    </>
  )
}
export default PrimaryButton