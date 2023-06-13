"use client";

import _ from "lodash";
import React, { createContext, useEffect, useState } from "react";
import ProductItem from "./product-item.component";
import { IProduct } from "@/app/interfaces/products.interface";

interface IProps {
    products: IProduct[]
}

export const ProductsContext = createContext<any>(null);

const ProductsListing : React.FC<IProps> = ({ products }) => {
    const [total, setTotal] = useState(0);
    const [productsState, setProducts] = useState(products.map(product => ({...product, quantity: 1})));

    useEffect(() => {
        setTotal(calculateTotal());
    }, [productsState])

    const calculateTotal = () : number => {
        const result = productsState.reduce((total, product) => {
            total += product.price * product.quantity;
            return total;
        }, 0)

        return result;
    }

    return (
        <ProductsContext.Provider value={
            {
                productsState,
                setProducts
            }
        }>
            <div className="grid grid-cols-4 gap-4">
                {!_.isEmpty(productsState) && productsState.map((product : IProduct, idx : number) => (
                    <ProductItem key={idx} product={{
                        id: product.id,
                        title: product.title,
                        price: product.price,
                        description: product.description,
                        thumbnail: product.thumbnail,
                        quantity: product.quantity
                    }} />
                ))}
            </div>
            <div className="my-4 text-xl"><strong>Total: {total}</strong></div>
        </ProductsContext.Provider>
    )
}

export default ProductsListing;
