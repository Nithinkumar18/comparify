import styles from './ProductList.module.css';
import ProductCard from '../ProductCard/ProductCard'
export default function ProductList({products,compareData,setCompareData}) {
    
    return(
        <>
        <div className={styles.disCons}>
         {products.map((product) => (
                <ProductCard key={product.id} product={product} products={products} compareData={compareData} setCompareData={setCompareData} />
         ))}
        </div>
        </>
    )
}