import React from 'react'
import Home from './Components/Home';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import Details from './Components/Details';
import Create from './Components/Create';
import Edit from './Components/Edit';

function App() {
  const {search, pathname} = useLocation();
  //console.log(search, pathname);
  return (
    <div className='w-full h-screen flex'>
      {(pathname !="/" || search.length > 0) && (
        <Link to={"/"} className='absolute left-[17%] top-[3%] text-red-300'>Home</Link>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/details/:id" element={<Details />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>

    </div>
  );
};

export default App