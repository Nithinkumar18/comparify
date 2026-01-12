import {useState} from "react";
import Header from './components/Header/Header';
import ProductList from './components/ProductList/ProductList';
import products from './data/products';
import ComparisionPanel from './components/ComparisionPanel/ComparisionPanel';

export default function App() {
  const [productss, setProducts] = useState([]);
  const [compareData, setCompareData] = useState([]);
  

  return (
    <>
     <Header />
     <ProductList products={products} setProducts={setProducts} compareData={compareData} setCompareData={setCompareData}/>
     <ComparisionPanel compareData={compareData} />
    </>
  )
}


