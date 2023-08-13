import Styles from './Card.module.css'
import Link from 'next/link'

const Card = ({ onHref,company,logo,logoBackground,position,postedAt,contract,location}) => {
  return(
    <Link href={onHref ? onHref : '/'} className={Styles.container}>
      <div className={Styles.logoContainer} style={{backgroundColor: logoBackground}}>
        <img src={logo} alt={`${company} logo`} />
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