"use client";

import Image from 'next/image';
import React, { useContext, useState } from 'react';
import _ from 'lodash';
import { ProductsContext } from './products-listing.component';
import { IProduct } from '@/app/interfaces/products.interface';

interface Props {
    product: Pick<IProduct, "id" | "title" | "thumbnail" | "description" | "price" | "quantity">
}

const ProductItem : React.FC<Props> = ({ product }) => {
    const [title, setTitle] = useState(product.title);
    const [fontSize, setFontSize] = useState(20);
    const {
        productsState,
        setProducts
    } = useContext(ProductsContext);

    const onQuantityChange = (value : string) : void => {
        const idx : number = productsState.findIndex((p : IProduct) => p.id === product.id)
        productsState[idx].quantity = value

        setProducts([...productsState])
    }

    return (!_.isEmpty(product) && 
        <div className='border-2 border-gray-800 p-4 flex flex-col'>
            <div className='h-40 bg-black'>
                <Image
                    className='h-full w-auto mx-auto'
                    src={product.thumbnail}
                    alt={title}
                    width={500}
                    height={264}
                />
            </div>
            <div className='my-6'>
                <h2><strong className="max-w-full" style={{fontSize}}>{ title }</strong></h2>
                <input className="block" type="text" defaultValue={title} onChange={($e) => setTitle($e.currentTarget.value)} />
                <label>Font size: <input type="range" defaultValue={fontSize} onChange={($e) => setFontSize(parseInt($e.currentTarget.value))} /></label>
            </div>
            <div>
                <span className='mr-2'><strong>${ Math.trunc(product.price * 100) / 100 }</strong></span>
                <input className='w-12 text-center' type="number" min="0" defaultValue={product.quantity} onChange={($e) => onQuantityChange($e.currentTarget.value)} />
            </div>
            <div className='my-3'>{ product.description }</div>
            <div className='flex flex-col items-center'>
                <button className='bg-sky-700/20 hover:bg-sky-700/10 text-sky-700 font-bold p-2 my-2 rounded' type="button">Add to cart</button>
                <button className='hover:underline' type="button">Learn More</button>
            </div>
        </div>
    )
}

export default ProductItem;
