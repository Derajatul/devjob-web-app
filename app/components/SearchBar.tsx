import Styles from './SearchBar.module.css'

const SearchBar = () => {
  return(  
    <section>
      {/* Searchbar mobile */}
      <form className={Styles.container}>
        <input type='text' placeholder="Filter by title..." />
        <div className={Styles.modal}>
          <label>
            <img src="/icons/icon-location.svg" />
          </label>
          <input type='text' placeholder="Filter by location..." />
        </div>
        <div className={Styles.buttons}>
          <button>
            <img src="/icons/icon-filter.svg" alt='' />
          </button>
          
          <button className={Styles.searchButton}>
            <img src="/icons/icon-search.svg" alt='' />
          </button>
        </div>
      </form>

      {/* Searchbar desktop */}
      <form className={Styles.containerDesktop}>
          <label className={Styles.formGroup}>
              <img src='/icons/icon-search-desktop.svg' alt='' />
            <input id='search' type='text' placeHolder="Filter by title..." />
          </label>
          <label className={Styles.formGroup}>
            <img src='/icons/icon-location.svg' alt='' />
            <input id='location' type='text' placeHolder="Filter by location..." />
          </label>
          <div className={Styles.formGroup}>
            <label>
              <input type="checkbox" />
              <p>Full Time</p>
            </label>
            <button className={Styles.searchButton}>Search</button>
          </div>
      </form>
    </section>
  )
}

export default SearchBar