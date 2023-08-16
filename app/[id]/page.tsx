import data from '../data.json';
import Link from 'next/link'
import Styles from './page.module.css'
import Image from 'next/image'

interface DetailProps {
  params: {
    id: number;
  };
}

const Detail = ({ params }: DetailProps) => {
   const filteredData = data.filter(el => el.id == params.id);
  const detailData = filteredData[0]
  return(
    <div>
      {/* Mobile header */}
      <section className={Styles.header}>
        <div className={Styles.logo} style={{backgroundColor: detailData.logoBackground}}>
          <img src={detailData.logo} />
        </div>
        <h2>{detailData.company}</h2>
        <Link href={detailData.website} className={Styles.buttonHeader}>Company Site</Link>
      </section>

      {/* Desktop header */}
      <section className={Styles.desktopHeader}>
        <div>
          <div style={{backgroundColor: detailData.logoBackground}} className={Styles.desktopLogoBackground}>
            <img src={detailData.logo} />
          </div>
          <div className={Styles.companyWebsite}>
            <h2>{detailData.company}</h2>
            <p>{detailData.website}</p>
          </div>
        </div>
        <Link className={Styles.buttonHeader} href={detailData.website}>Company Site</Link>
      </section>
      
      <section className={Styles.main}>
      <Link href="/">&larr; back to home</Link>
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

    <section className={Styles.footer}>
      <div>
        <h3>{detailData.position}</h3>
        <p>{detailData.company}</p>
      </div>
      <Link href={detailData.apply}>Apply Now</Link>
    </section>
    </div>
  )
}
export default Detail