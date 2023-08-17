import Styles from './Card.module.css'
import Link from 'next/link'
import Image from 'next/image'

interface CardProps {
  onHref?: string;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
}

const Card = ({
  onHref = '/',
  company,
  logo,
  logoBackground,
  position,
  postedAt,
  contract,
  location,
}: CardProps) => {
  return(
    <Link href={onHref ? onHref : '/'} className={Styles.container} >
      <div className={Styles.logoContainer} style={{backgroundColor: logoBackground}}>
        <Image src={logo} alt={`${company} logo`} layout="responsive"
  width={100}
  height={100} />
      </div>
      <div className={Styles.jobPostingInfo}>
        <p>{postedAt}</p>
        <span className={Styles.divider}></span>
        <p>{contract}</p>
      </div>
      <h3>{position}</h3>
      <p>{company}</p>
      <h4>{location}</h4>
    </Link>
  )
}

export default Card