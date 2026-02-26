import { createContext, useState, useContext } from "react";
import data from "../data/db.json";

const ProductContext = createContext();

export function ProductProvider({children}){

  const [products] = useState(data.products);
  const loading = false;
  const error = null;

  return(
    <ProductContext.Provider value={{products, loading, error}}>
    {children}
    </ProductContext.Provider>
  )
}

export function useProducts(){
    return useContext(ProductContext);
}