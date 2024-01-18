import styles from './styles.module.css';

export const Game = ({rgb}) => {
    return <section className={styles.game} style={{backgroundColor:`${rgb}`}}>
   {rgb}
    </section>
}
Game.propTypes = String;