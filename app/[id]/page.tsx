import data from '../data.json';
import {useEffect} from 'react'
const Detail = ({
  params,
  postedAt,
  contract,
  position,
  location,
  description,
  requirements,
  role
}) => {
   const filteredData = data.filter(el => el.id == params.id);
  const detailData = filteredData[0]
  return(
    <div>
      <div>
        <p>{detailData.postedAt}</p>
        <span></span>
        <p>{detailData.contract}</p>
      </div>
      <div>
        <div>
          <h3>{detailData.position}</h3>
          <h4>{detailData.location}</h4>
        </div>
        <button>Apply Now</button>
      </div>
      <p>{detailData.description}</p>
      <h4>Requirements</h4>
      <p>{detailData.requirements.content}</p>
      <ul>{detailData.requirements.items.map(item => (
        <li>
          {item}
        </li>
      ))}</ul>
      <h4>What you will do</h4>
      <p>{detailData.role.content}</p>
      <ol>{detailData.role.items.map(item => (
        <li>
          {item}
        </li>
      ))}</ol>
    </div>
  )
}
export default Detail