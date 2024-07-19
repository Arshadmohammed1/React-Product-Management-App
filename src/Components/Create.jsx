import React, { useContext, useState } from 'react'
import { Productcontext } from '../Utils/Context';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Create() {
    const navigate = useNavigate();
    const {products, setproducts} = useContext(Productcontext);
    const [title, settitle] = useState();
    const [image, setimage] = useState();
    const [price, setprice] = useState();
    const [category, setcategory] = useState();
    const [description, setdescription] = useState();

    const AddProductHandler = (e) => {
        e.preventDefault();

        if(!title ||!image ||!category || !price ||!description) { alert("All fields must be filled out"); return; }

        //if(title.trim().length < 5 || image.trim().length < 5 || category.trim().length < 5 || price.trim().length < 1 || description.trim().length < 5) { alert("All fields must be filled out and have at least 5 characters"); }

        const product = {
            id: nanoid(),
            title,
            image,
            price,
            category,
            description
        };
        setproducts([...products, product]);
        localStorage.setItem("products", JSON.stringify([...products, product]));
        navigate("/");
        toast.success("New Product Added Successfully");
        //console.log(product);
    };


  return (
    <form onSubmit={AddProductHandler} className='flex flex-col items-center p-[5%] w-screen h-screen'>
        <h1 className='mb-5 w-1/2 text-3xl'>Add New Product</h1>

        <input type="url" placeholder='image link' className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3' onChange={(e) => setimage(e.target.value)} value={image}/>

        <input type="text" placeholder='title' className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3' onChange={(e) => settitle(e.target.value)} value={title}/>

        <div className='w-1/2 flex justify-between'>

        <input type="text" placeholder='Category' className='text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3' onChange={(e) => setcategory(e.target.value)} value={category}/>

        <input type="number" placeholder='price' className='text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3' onChange={(e) => setprice(e.target.value)} value={price}/>

        </div>

        <textarea className='text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3' placeholder='enter product description here...' rows={"6"} onChange={(e) => setdescription(e.target.value)} value={description}></textarea>

        <div className='w-1/2'>
        <button className='py-2 px-5 border border-blue-200 text-blue-300'>
            Add New Product
        </button>
        </div>
        

    </form>
  )
}

export default Create