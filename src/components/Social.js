import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Social.css";
import { AppStoreContext } from "../contexts/AppStoreContext";

const Social = () => {
  const { searchData, category } = useContext(AppStoreContext);
  const [dataItems, setDataItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        let Url = "http://localhost:3000/apps";
        if (category !== "All") {
          Url += `?category=${category}`;
        } 

        const taskData = await axios.get(Url);

          setDataItems(taskData.data);
          

      } catch (err) {
        console.log("Error fetching image..");
      }
    };

    fetchData();


  }, [category]);



  const searchFilter = dataItems.filter((fil)=>
        fil.name.toLowerCase().includes(searchData.toLowerCase())).sort((a,b)=> a.name.localeCompare(b.name));

  return (
    <div>
    <div className="social-grid">
      {searchFilter.map((task) => (
        <div className="social-grid-items" key={task.id}>
          <img src={task.img_url} alt={task.name} />
          <p style={{textAlign: 'center'}}>{task.name}</p>
        </div>
      ))}
      
    </div>
    </div>
  );
};

export default Social;
