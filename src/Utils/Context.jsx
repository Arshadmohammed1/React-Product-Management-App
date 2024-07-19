import axios from './Axios';
//import React, { createContext, useContext, useEffect, useState } from 'react'
import React, { createContext, useEffect, useState } from 'react'

export const Productcontext = createContext();

function Context(props) {
    const [products, setproducts] = useState(JSON.parse(localStorage.getItem("products")) || null );
    
    //const getproducts = async () => {
    //    try{
    //        const {data} = await axios("/Products");
    //        setproducts(data);
    //    } catch (error) {
    //        console.log(error);
    //    }
    //};
    //console.log(products);

    //useEffect(() => {
    //    getproducts();
    //}, []);
    
  return (
    <div>
        <Productcontext.Provider value={{products, setproducts}}>{props.children}</Productcontext.Provider>
    </div>
  )
}

export default Context