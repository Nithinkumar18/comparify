
import ComparisionRow from '../ComparisionRow/ComparisionRow';
import styles from './ComparisionPanel.module.css';
export default function ComparisionPanel({compareData}) {
    return (
        <>
        <div  className={styles.comparePan}>
         <p className={styles.header}>Comapre Here</p>
         {compareData.length > 1 ? (
            <div>
             <ComparisionRow compareData={compareData}/>
         </div>
        ) 
         
         
         :( <div className={styles.disText}>
             Please select 2 products to compare!
             </div>)}
        </div>
        </>
    )
    
}