import styles from './styles.module.css';

export const Block = ({arr,setRgb}) => {
  

    return <ul className={styles.card}>
       
         {arr.map((item,i)=><li key={i+item} style={{backgroundColor:`${item}`}} onClick={()=>setRgb(item)}>{item}</li>)}

    </ul>
}
Block.propTypes = Array;
