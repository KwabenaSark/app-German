import React from 'react';
import data from '../data.json';
import Detail from './Detail';

const ProductPage = () => {
  const selected = localStorage.getItem('selectedProductId');
  const PRODUCT_ID = Number(selected); // ✅ Convert to number

  const product = data.find((item) => item.id === PRODUCT_ID);

  if (!product) return <div>Product not found</div>;

  console.log('Product:', product);
  console.log(data, "<<< this is the raw data");

  return <Detail product={product} />;
};

export default ProductPage;