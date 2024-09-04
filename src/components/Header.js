import React, { useContext, useState } from 'react'
import '../Styles/Header.css'
import { AppStoreContext } from '../contexts/AppStoreContext';

const Header = () => {

    const {handleSearchData, handleCategory} = useContext(AppStoreContext);
    const [search, setSearch] = useState('');

    const handleSearch = (e)=>{
        const searches = e.target.value;
        setSearch(searches);
        handleSearchData(searches);
    }


  return (
    <div style={{paddingTop: '50px'}}>
    <div className='title-div'>
        <h1>App Store</h1>
    </div>
    <div className='search-div'>
        <input type="text" value={search} onChange={handleSearch} placeholder='Search' />
    </div>

<div>
    <nav className='header-nav'>
        <ul>
            <li onClick={()=>handleCategory('All')} className='nav-items' style={{listStyleType: 'none'}}>All</li>
            <li onClick={()=>handleCategory('social')} className='nav-items' style={{listStyleType: 'none'}}>Social</li>
            <li onClick={()=>handleCategory('games')} className='nav-items' style={{listStyleType: 'none'}}>Games</li>
            <li onClick={()=>handleCategory('news')} className='nav-items' style={{listStyleType: 'none'}}>News</li>
            <li onClick={()=>handleCategory('food')} className='nav-items' style={{listStyleType: 'none'}}>Food</li>
        </ul>
    </nav>
</div>
</div>  
  )
}

export default Header