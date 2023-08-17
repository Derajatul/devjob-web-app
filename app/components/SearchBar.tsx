'use client'

import React, { useState } from 'react';
import Styles from './SearchBar.module.css';
import Image from 'next/image'

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


  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleLocationChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchLocation(event.target.value);
  };

  const handleFullTimeChange = () => {
    setFullTimeChecked(!fullTimeChecked);
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
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
              <Image width={25} height={25} layout='responsive' alt='' src="/icons/icon-location.svg" />
              </label>
              <input type='text' placeholder="Filter by location..."  value={searchLocation}
              onChange={handleLocationChange}/>
              <button className={Styles.searchButton}>
                <Image width={25} height={25} layout="responsive" src="/icons/icon-search.svg" alt='' />
              </button>
            </div>
          </div>
        </div>
        <div className={Styles.buttons} onClick={handleModal}>
          <button>
            <Image width={20} height={20} src="/icons/icon-filter.svg" alt='' />
          </button>
          
          <button className={Styles.searchButton}>
            <Image width={27} height={27} src="/icons/icon-search.svg" alt='' />
          </button>
        </div>
      </form>

      {/* Searchbar desktop */}
      <form className={Styles.containerDesktop} onSubmit={handleSubmit}>
          <label className={Styles.formGroup}>
            <Image width={65} height={65}  src='/icons/icon-search-desktop.svg' alt='' />
            <input id='search' type='text' placeholder="Filter by title..."  value={searchTerm}
          onChange={handleSearchChange}/>
          </label>
          <label className={Styles.formGroup}>
            <Image width={58} height={65} src='/icons/icon-location.svg' alt='' />
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