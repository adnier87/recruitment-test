import ProductsListing from '@/components/products-listing.component';

const fetchProducts =  async () => {
    return await (await fetch('https://dummyjson.com/products?limit=10')).json();
}

export default async function Products () {
    const { products } = await fetchProducts(); console.log(products);

    return (
        <main className='container mx-auto py-5'>
            <ProductsListing products={products} />
        </main>
    )
}