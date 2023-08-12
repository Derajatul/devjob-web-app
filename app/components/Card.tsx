import Styles from './Card.module.css'

const Card = ({ company,logo,logoBackground,position,postedAt,contract,location}) => {
  return(
    <div className={Styles.container}>
      <div className={Styles.logoBackground} style={{backgroundColor: logoBackground}}>
        <img src={logo} alt={`${company} logo`} />
      </div>
      <div>
        <p>{postedAt}</p>
        <span>.</span>
        <p>{contract}</p>
      </div>
      <h3>{position}</h3>
      <p>{company}</p>
      <h3>{location}</h3>
    </div>
  )
}

export default Card