import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout';
import { useState } from 'react';
import { AppStoreContext } from './contexts/AppStoreContext';
import Social from './components/Social';

function App() {

  const [searchData, setSearchData] = useState('');
  const [category, setCategory] = useState('All');

  function handleSearchData(search){
    setSearchData(search);
  }
  function handleCategory(category){
    setCategory(category);
  }

  return (
    <div className="App">
      
      <AppStoreContext.Provider value={{searchData, category, handleCategory, handleSearchData }}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
          <Route index element={<Social />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </AppStoreContext.Provider>
    </div>
  );
}

export default App;
