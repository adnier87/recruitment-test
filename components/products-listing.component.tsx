import _ from "lodash";
import React from "react";
import ProductItem from "./product-item.component";

interface IProps {
    products: IProduct[]
}

export interface IProduct {
    id:                 number;
    title:              string;
    description:        string;
    price:              number;
    discountPercentage: number;
    rating:             number;
    stock:              number;
    brand:              string;
    category:           string;
    thumbnail:          string;
    images:             string[];
}


const ProductsListing : React.FC<IProps> = ({ products }) => {

    return (
        <div className="grid grid-cols-4 gap-4">
            {!_.isEmpty(products) && products.map((product : IProduct) => (
                <ProductItem product={{
                    id: product.id,
                    title: product.title,
                    price: product.price,
                    description: product.description,
                    thumbnail: product.thumbnail,
                }} />
            ))}
        </div>
    )
}

export default ProductsListing;
