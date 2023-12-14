import styles from '../components/Parallax.module.css'

const Parallax = () => {
  return (
    <div className={styles.container}>
        <img className={styles.parallax} height={800} width={1270}/>
        <h4 className={styles.text}>Treinar não é compromisso com a academia, é compromisso com você mesmo! <br/><small className={styles.citação}><hr/>- Stephanie Riche.</small></h4>
    </div>
  )
}

export default Parallax