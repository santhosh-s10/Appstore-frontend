import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "../Styles/StoreFront.css";
import { AppStoreContext } from "../contexts/AppStoreContext";

const Social = () => {
  const { searchData, category } = useContext(AppStoreContext);
  const [dataItems, setDataItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let Url = "https://appstore-backend-coral.vercel.app/apps";
        if (category !== "All") {
          Url += `?category=${category}`;
        }

        const taskData = await axios.get(Url);
        setDataItems(taskData.data);
      } catch (err) {
        console.log("Error fetching data..", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [category]);

  const searchFilter = dataItems
    .filter((fil) =>
      fil.name.toLowerCase().includes(searchData.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <div className="store-container">
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <span className="hero-tag">Featured</span>
          <h2 className="hero-title">Experience the Next Level</h2>
          <p className="hero-description">Discover the most immersive apps and games curated just for you.</p>
          <button className="hero-button">Explore Now</button>
        </div>
        {/* Abstract/Placeholder graphics for Hero could go here */}
      </div>

      <div className="section-header">
        <h3 className="section-title">{category === 'All' ? 'Popular Apps' : category}</h3>
      </div>

      {loading ? (
        <div style={{ color: 'white', textAlign: 'center', padding: '2rem' }}>Loading...</div>
      ) : (
        <div className="apps-grid">
          {searchFilter.map((task) => (
            <div className="app-card" key={task._id}>
              <div className="app-image-container">
                <img src={task.img_url} alt={task.name} className="app-image" />
              </div>
              <div className="app-info">
                <h4 className="app-name">{task.name}</h4>
                <p className="app-category">{category === 'All' ? 'App' : category}</p>
                <button className="get-button">Get</button>
              </div>
            </div>
          ))}
          {searchFilter.length === 0 && !loading && (
            <p style={{ color: 'var(--text-secondary)' }}>No apps found.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Social;
