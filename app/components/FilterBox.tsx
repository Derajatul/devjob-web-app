import Styles from './FilterBox.module.css'

const FilterBox = () => {
  return(
    <form className={Styles.container}>
      <div className={Styles.formGroup}>
        <label for="search">
          <img src="/icons/icon-search.svg" alt=""/>
        </label>
        <input id="search" type="text" placeholder="Filter by title..."/>
      </div>
      <div className={Styles.formGroup}>
        <label for="location">
          <img src="icons/icon-location.svg" />
        </label>
        <input id="location" type="text" placeholder="Filter by location..." />
      </div>
      <div className={Styles.formGroup}>
        <div className={Styles.fullTime}>
          <input type="checkbox" id="fulltime" />
          <label for="fulltime">Full Time</label>
        </div>
        <button type="submit">Search</button>
      </div>
    </form>
  )
}

export default FilterBox