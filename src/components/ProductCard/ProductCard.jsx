import styles from './ProductCard.module.css';
import { useState} from "react";
export default function  ProductCard({product,products,compareData, setCompareData}) {
  const [disableBtn, setDisablebtn] = useState(false);
  const handleCompare = (pid) => {
      const addtoCart = products.find((myProduct) => myProduct.id === pid);
      setCompareData([...compareData,addtoCart]);
      setDisablebtn(!disableBtn);
  }

  const handleRemoveCompare = (productId) => {
     const removeFromCompare = compareData.slice().filter((cmpData) => cmpData.id !== productId);
     setCompareData(removeFromCompare);
     setDisablebtn(!disableBtn);
  }
  
    return(
        <>
            <div className={styles.myCard}>
                <div className={styles.myCardDetails}>
                    <span className={styles.bpos}>{disableBtn ? (<button onClick={() =>handleRemoveCompare(product.id)} className={styles.rmbtn}>remove</button>) : (<button onClick={() => handleCompare(product.id)} className={styles.cbtn}>compare</button>)}</span>
                    <p className={styles.pid}> Id: {product.id}</p>
                    <p className={styles.subCon}>Name: {product.name}</p>
                    <p  className={styles.subCon}>Brand: {product.brand}</p>
                    <p  className={styles.pprice}>Price: {product.price}</p>
                    <p  className={styles.prating}>Rating: {product.rating}</p>
                    <p className={styles.pavailable}>{product.inStock ? ( <span className={styles.ava}>Available</span> ) : (<span className={styles.unava}>Out of Stock</span>)}  </p>
                </div>
            </div>
        </>
    )

 
  
}