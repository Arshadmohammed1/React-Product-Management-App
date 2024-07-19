import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Productcontext } from '../Utils/Context';
//import axios from '../Utils/Axios';
import Loading from './Loading';
import { toast } from 'react-toastify';

function Details() {
  const navigate = useNavigate();
  const {products, setproducts} = useContext(Productcontext);
  const [product, setproduct] = useState(null);

  const { id } = useParams();
  //console.log(id);
  //const {products} = useContext(Productcontext);

  //const getsingleproduct = async () => {
  //  try{
  //      const {data} = await axios.get(`/products/${id}`);
  //      setproduct(data);
  //  } catch (error) {
  //      console.log(error);
  //  }
//};
  

  const ProductDeleteHandler = () => {
    const FilteredProducts = products.filter((p) => p.id!== id);
    setproducts(FilteredProducts);
    localStorage.setItem("products", JSON.stringify(FilteredProducts));
    toast.success("Product Deleted Successfully");
    navigate("/");
    //return;
    //axios.delete(`/products/${id}`);
    //setproducts(products.filter((p) => p.id!== id));
  };


  useEffect(() => {
    if(!product) {
      setproduct(products.filter((p) => p.id == id)[0]);
    };
    //getsingleproduct();
  }, []);

  return product ? (
    <div className='w-[70%] flex h-full justify-between items-center p-[10%] m-auto'>
        <img className='object-contain h-[80%] w-[40%]' src={`${product.image}`} alt="" />
        <div className='content w-[50%]'>
            <h1 className='text-sm font-bold'>{product.title}</h1>
            <h3 className='text-zinc-400 my-5'>{product.category}</h3>
            <h2 className='text-red-300 mb-3'>${product.price}</h2>
            <p className='mb-[5%] text-xs'>{product.description}</p>
            <Link to={`/edit/${product.id}`} className='mr-5 py-2 px-5 border border-blue-200 text-blue-300 rounded' href='/create'>Edit</Link>
            <button onClick={() => ProductDeleteHandler(product.id)} className='py-2 px-5 border border-blue-200 text-blue-300 rounded' href='/create'>Delete</button>
        </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details