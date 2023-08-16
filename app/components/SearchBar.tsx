'use client'

import React, { useState } from 'react';
import Styles from './SearchBar.module.css';

interface SearchBarProps {
  onSearch: (searchParams: {
    term: string;
    location: string;
    fullTime: boolean;
  }) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchLocation, setSearchLocation] = useState('');
  const [fullTimeChecked, setFullTimeChecked] = useState(false);


  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleLocationChange = (event) => {
    setSearchLocation(event.target.value);
  };

  const handleFullTimeChange = () => {
    setFullTimeChecked(!fullTimeChecked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchParams = {
      term: searchTerm,
      location: searchLocation,
      fullTime: fullTimeChecked,
    };
    onSearch(searchParams);
  };

  const handleModal = () => {
    const modal = document.getElementById('modal')
    modal.style.display = 'block'
  };
  const handleCloseModal = () => {
    const modal = document.getElementById('modal')
    modal.style.display = 'none'
  }
  return(  
    <section>
      {/* Searchbar mobile */}
      <form className={Styles.container} onSubmit={handleSubmit}>
        <input type='text' placeholder="Filter by title..." value={searchTerm}
          onChange={handleSearchChange}/>
        <div className={Styles.modal} id="modal">
          <div>
            <span id="close" onClick={handleCloseModal}>&times;</span>
            <div>
              <label>
              <img src="/icons/icon-location.svg" />
              </label>
              <input type='text' placeholder="Filter by location..."  value={searchLocation}
              onChange={handleLocationChange}/>
              <button className={Styles.searchButton}>
                <img src="/icons/icon-search.svg" alt='' />
              </button>
            </div>
          </div>
        </div>
        <div className={Styles.buttons} onClick={handleModal}>
          <button>
            <img src="/icons/icon-filter.svg" alt='' />
          </button>
          
          <button className={Styles.searchButton}>
            <img src="/icons/icon-search.svg" alt='' />
          </button>
        </div>
      </form>

      {/* Searchbar desktop */}
      <form className={Styles.containerDesktop} onSubmit={handleSubmit}>
          <label className={Styles.formGroup}>
            <img src='/icons/icon-search-desktop.svg' alt='' />
            <input id='search' type='text' placeholder="Filter by title..."  value={searchTerm}
          onChange={handleSearchChange}/>
          </label>
          <label className={Styles.formGroup}>
            <img src='/icons/icon-location.svg' alt='' />
            <input id='location' type='text' placeholder="Filter by location..." value={searchLocation}
            onChange={handleLocationChange} />
          </label>
          <div className={Styles.formGroup}>
            <label>
              <input type="checkbox" checked={fullTimeChecked}
              onChange={handleFullTimeChange} />
              <p>Full Time</p>
            </label>
            <button className={Styles.searchButton} type="submit" >Search</button>
          </div>
      </form>
    </section>
  )
}

export default SearchBar