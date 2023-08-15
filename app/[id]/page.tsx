import data from '../data.json';
import Link from 'next/link'
import Styles from './page.module.css'

const Detail = ({ params }) => {
   const filteredData = data.filter(el => el.id == params.id);
  const detailData = filteredData[0]
  return(
    <div>
      <section className={Styles.headContainer}>
        <div className={Styles.logo} style={{backgroundColor: detailData.logoBackground}}>
          <img src={detailData.logo} />
        </div>
        <h2>{detailData.company}</h2>
        <Link href={detailData.website}>Company Site</Link>
      </section>
      
      <section className={Styles.container}>
      <div className={Styles.jobPostingInfo}>
        <p>{detailData.postedAt}</p>
        <span className={Styles.divider}></span>
        <p>{detailData.contract}</p>
      </div>
      <div className={Styles.jobDetails}>
        <div>
          <h1>{detailData.position}</h1>
          <h4>{detailData.location}</h4>
        </div>
        <Link href={detailData.apply} target='_blank' className={Styles.button}>Apply Now</Link>
      </div>
      <p>{detailData.description}</p>
      <h3>Requirements</h3>
      <p>{detailData.requirements.content}</p>
      <ul>{detailData.requirements.items.map(item => (
        <li key={item}>
          {item}
        </li>
      ))}</ul>
      <h3>What you will do</h3>
      <p>{detailData.role.content}</p>
      <ol>{detailData.role.items.map(item => (
        <li key={item}>
          {item}
        </li>
      ))}</ol>
    </section>
    </div>
  )
}
export default Detail