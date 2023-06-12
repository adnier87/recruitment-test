"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import _ from 'lodash';

interface Props {
    product: {
        id: number,
        price: number,
        title: string,
        description: string,
        thumbnail: string
    }
}

const ProductItem : React.FC<Props> = ({ product }) => {
    const [title, setTitle] = useState(product.title)

    return (!_.isEmpty(product) && 
        <div className='border-2 border-gray-800 p-4 flex flex-col'>
            <div className='h-40 bg-black'>
                <Image
                    className='h-full w-auto mx-auto'
                    src={product.thumbnail}
                    alt={product.title}
                    width={500}
                    height={264}
                />
            </div>
            <div className='my-6'>
                <h2 className='text-lg'><strong>{ title }</strong></h2>
                <input type="text" defaultValue={title} onChange={($e) => setTitle($e.currentTarget.value)} />
            </div>
            <div>
                <span className='mr-2'><strong>${ Math.trunc(product.price * 100) / 100 }</strong></span>
                <input className='w-12 text-center' type="number" min="0" defaultValue={1} name="amount" id="amount-input" />
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
