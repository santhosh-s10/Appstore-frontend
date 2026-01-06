import React, { useContext, useState } from 'react';
import '../Styles/Header.css';
import { AppStoreContext } from '../contexts/AppStoreContext';

const Header = () => {
    const { handleSearchData, handleCategory, category } = useContext(AppStoreContext);
    const [search, setSearch] = useState('');

    const handleSearch = (e) => {
        const searches = e.target.value;
        setSearch(searches);
        handleSearchData(searches);
    };

    const navItems = [
        { id: 'All', label: 'Home' },
        { id: 'social', label: 'Social' },
        { id: 'games', label: 'Games' },
        { id: 'news', label: 'News' },
        { id: 'food', label: 'Food' },
    ];

    return (
        <header className="header-container">
            <div className="header-top">
                <div className="logo">
                    <h1>AppStore</h1>
                </div>

                <div className="search-container">
                    <svg className="search-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="11" cy="11" r="8"></circle>
                        <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                    <input
                        type="text"
                        className="search-input"
                        value={search}
                        onChange={handleSearch}
                        placeholder="Search apps, games..."
                    />
                </div>

                <div className="user-profile">
                    <span>JD</span>
                </div>
            </div>

            <nav className="nav-tabs">
                {navItems.map((item) => (
                    <div
                        key={item.id}
                        onClick={() => handleCategory(item.id)}
                        className={`nav-item ${category === item.id ? 'active' : ''}`}
                    >
                        {item.label}
                    </div>
                ))}
            </nav>
        </header>
    );
};

export default Header;