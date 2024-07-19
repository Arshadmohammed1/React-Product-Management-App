import { nanoid } from 'nanoid';
import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { Productcontext } from '../Utils/Context';
import { toast } from 'react-toastify';

function Edit() {

    const {products, setproducts} = useContext(Productcontext);
    const navigate = useNavigate();
    const {id} = useParams();
    const [product, setproduct] = useState({
        id: '',
        title: '',
        image: '',
        price: '',
        category: '',
        description: '',
    });
    //const [title, settitle] = useState();
    //const [image, setimage] = useState();
    //const [price, setprice] = useState();
    //const [category, setcategory] = useState();
    //const [description, setdescription] = useState();

    const ChangeHandler = (e) => {
        //console.log(e.target.name, e.target.value);
        setproduct({...product, [e.target.name]: e.target.value });
    }

    useEffect(() => {
        setproduct(products.filter((p) => p.id == id)[0]);
    }, [id]);

    //console.log(product);

    const AddProductHandler = (e) => {
        e.preventDefault();

        if(!product.title ||!product.image ||!product.category || !product.price ||!product.description) { 
            alert("All fields must be filled out"); 
            return; 
        };

        const pi = products.findIndex((p) => p.id == id);
        const copyData = [...products];
        copyData[pi] = {...products[pi], ...product};
        //console.log(copyData);

        //const product = {
        //    id: nanoid(),
        //    title,
        //    image,
        //    price,
        //    category,
        //    description
        //};

        setproducts(copyData);
        localStorage.setItem("products", JSON.stringify(copyData));
        navigate(-1);
        toast.success("Product Details Updated Successfully");
        //console.log(product);
    };

    const handleEdit = (id) => {
        const product = products.find((p) => p.id === id);
        settitle(product.title);
        setimage(product.image);
        setprice(product.price);
        setcategory(product.category);
        setdescription(product.description);
    };


  return (
    <form onSubmit={AddProductHandler} className='flex flex-col items-center p-[5%] w-screen h-screen'>
        <h1 className='mb-5 w-1/2 text-3xl'>Edit Product Details</h1>

        <input type="url" placeholder='image link' className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3' name='image' onChange={ChangeHandler} value={product && product.image}/>

        <input type="text" placeholder='title' className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3' name='title' onChange={ChangeHandler} value={product && product.title}/>

        <div className='w-1/2 flex justify-between'>

        <input type="text" placeholder='Category' className='text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3' name='category' onChange={ChangeHandler} value={product && product.category}/>

        <input type="number" placeholder='price' className='text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3' name='price' onChange={ChangeHandler} value={product && product.price}/>

        </div>

        <textarea className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3' placeholder='enter product description here...' rows={"6"} name='description' onChange={ChangeHandler} value={product && product.description}></textarea>

        <div className='w-1/2'>
        <button className='py-2 px-5 border border-blue-200 text-blue-300'>
            Edit Product
        </button>
        </div>
        

    </form>
  )
}

export default Edit