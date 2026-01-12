
import styles from './ComparisionRow.module.css';
export default function ComparisionRow({compareData}) {
 
    const val = Math.min(...compareData.map((val) => val.price));
    const ratings = Math.max(...compareData.map((v) => v.rating));
   
    return(
        <>
         <div className={styles.table_container}>
         <table className={styles.dataTable}>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Rating</th>
                    <th>Stock</th>
                </tr>
            </thead>
            <tbody>
                {compareData.map((cdata) => (
                    <tr key={cdata.id}>
                        <td>{cdata.name}</td>
                        <td>{cdata.price === val ? (<p className={styles.ava}>{cdata.price}</p>) : (<p className={styles.unava}>{cdata.price}</p>)}</td>
                        <td>{cdata.rating === ratings ? (<p className={styles.ava}>{cdata.rating}</p>) : (<p className={styles.unava}>{cdata.rating}</p>)}</td>
                        <td>{ cdata.inStock ? (<p className={styles.ava}> Available</p>) : (<p className={styles.unava}>Out of Stock</p>)}</td>
                    </tr>
                ))}
            </tbody>
         </table>

         </div>
        </>
    )
}