import Image from 'next/image';
import React from 'react';
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
    return (!_.isEmpty(product) && 
        <div className='border-2 border-gray-800 p-4 flex flex-col'>
            <Image
                src={product.thumbnail}
                alt={product.title}
                width={500}
                height={264}
            />
            <h2 className='my-6 text-lg'><strong>{ product.title }</strong></h2>
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
