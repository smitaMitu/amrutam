import { createContext, useEffect, useState } from "react";
import Data from "../../data/Products.json";
import Experts from "../../data/Experts.json";
export const Context = createContext();

export const ProductProvider = ({ children }) => {

  const [products, setProducts] = useState([]);
  const [productDetail, setProductDetail] = useState(null);
  const [experts, setExperts] = useState([]);  

  // ✅ Load all products
  const getProductsData = () => {
    setProducts(Data);
  };

  // ✅ Get product by ID
  const getProductById = (id) => {
    const product = products.find(item => item.id === Number(id));
    setProductDetail(product || null);
  };

  useEffect(() => {
    getProductsData();    
    setExperts(Experts)
  }, []);

  return (
    <Context.Provider
      value={{
        products,
        productDetail,
        getProductsData,
        getProductById,
        experts
      }}
    >
      {children}
    </Context.Provider>
  );
};
