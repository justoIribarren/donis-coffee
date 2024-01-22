import styles from './styles.module.scss'

function Stores({ store, subtitle }) {
  return <div className={styles.stores__wrapper}>
    <h3>{store}</h3>
    <h4>{subtitle}</h4>
    <button>
      Reservar           
      <span className='material-symbols-outlined'>arrow_right_alt</span>
    </button>
  </div>
}
export default Stores