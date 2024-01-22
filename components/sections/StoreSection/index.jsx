import Stores from '../StoresSection'
import styles from './styles.module.scss'

const stores = [
  { title: 'TIENDA 1', subtitle: 'Rosario, Argentina' },
  { title: 'TIENDA 2', subtitle: 'Rosario, Argentina' },
  { title: 'TIENDA 3', subtitle: 'Buenos Aires, Argentina' },
  { title: 'TIENDA 4', subtitle: 'Buenos Aires, Argentina' },
  { title: 'TIENDA 5', subtitle: 'Tokyo, Japón' },
  { title: 'TIENDA 6', subtitle: 'NY, Estados Unidos' }
]

function StoreSection() {

  return <section className={styles.stores}>
    {stores.map((store, i) => <Stores key={i} store={store.title} subtitle={store.subtitle}/>)}
  </section>
}
export default StoreSection