import { createContext, useState, useEffect } from "react";

import { addCollectionAndDocuments, addDocuments, getDocuments } from "../utils/firebase/firebase.utils.js";

export const ProductsContext = createContext({
    products: [],
    setCurrentProducts: () => {},
});

export const ProductsProvider = ({ children }) => {
    const [products, setCurrentProducts] = useState([]);

    useEffect(() => {
        const fun = async () => {
            const res = await getDocuments();
            setCurrentProducts(res);
        }
        fun();
    }, []);

    const value = { products, setCurrentProducts };

    return <ProductsContext.Provider value={value}>{children}</ProductsContext.Provider>
};