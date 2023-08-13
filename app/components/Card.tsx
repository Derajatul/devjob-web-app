import Styles from './Card.module.css'

const Card = ({ company,logo,logoBackground,position,postedAt,contract,location}) => {
  return(
    <div className={Styles.container}>
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
    </div>
  )
}

export default Card