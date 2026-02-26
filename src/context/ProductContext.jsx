import { createContext, useState, useEffect, useContext } from "react";
import data from "../data/db.json";

const ProductContext = createContext();

export function ProductProvider({children}){
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() =>{
    const fetchProducts = async () =>{
      try{
        //const res = await fetch(`${import.meta.env.VITE_API_URL}/products`);        if(!res.ok) throw new Error('Failed to fetch products');
        //const data = //await res.json();
        console.log(data);
        setProducts(data.products);
      }
      catch(err){
        setError(err.message);
      }
      finally{
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return(
    <ProductContext.Provider value={{products, loading, error}}>
    {children}
    </ProductContext.Provider>
  )
}

export function useProducts(){
    return useContext(ProductContext);
}