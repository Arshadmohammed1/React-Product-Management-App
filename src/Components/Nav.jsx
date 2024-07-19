import React, { useContext } from 'react'
import { Productcontext } from '../Utils/Context';
import { Link } from 'react-router-dom';

function Nav() {
  const {products} = useContext(Productcontext);

  let distinct_category = products && products.reduce((acc, cv) => [...acc, cv.category],[]);
  distinct_category = [...new Set(distinct_category)];
  //console.log(distinct_category);

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},0.4)`;
  };
  //console.log(color());


  return (
    <>
    <nav className='pt-5 w-[15%] h-full bg-zinc-50 flex flex-col items-center'>
        <a className='py-2 px-5 border border-blue-200 text-blue-300 rounded hover:border-black hover:text-black hover:bg-white' href='/create'>Add New Products</a>

        <hr className='my-3 w-[80%]'/>

        <h1 className='w-[80%] mb-3 text-2xl'>Category Filter</h1>
        
        <div className='w-[80%]'>

        {distinct_category.map((c, index) => (
          <Link key={index} to={`/?category=${c}`} className='mb-3 flex items-center'>
          <span style={{backgroundColor: color()}} className='w-[15px] h-[15px] mr-2 rounded-full inline-block'></span>{""}
          {c}
          </Link>
        ))}
          
        </div>
      </nav>
    </>
  )
}

export default Nav