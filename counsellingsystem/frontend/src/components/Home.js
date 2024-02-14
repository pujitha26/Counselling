import React from 'react'
import Hello from './Hello'
import Greet from './Greet'
import Message from './Message'
import Counter from './Counter'
import ProductList from './ProductList'
import DataFetch from './DataFetch'
import FetchRegistrations from './FetchRegistrations'

const Home = () => {
  const products = [
    { name: 'Product 1', price: 50 },
    { name: 'Product 2', price: 100 },
    { name: 'Product 3', price: 150 },
  ];
  return (
    <div>
     <FetchRegistrations/>
      {/*<ProductList products={products} />
       <Hello products={products}/> 
       <DataFetch/>
      <Message/>
      <Counter/>
      <Hello name='Pujitha' id='2200031702'/>
      <Greet name='Pujitha'/>  */}
    </div>
  );
};

export default Home;
