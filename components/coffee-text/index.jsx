import styles from './styles.module.scss'

function CoffeeText({ children }) {
  return (
    <div className={styles.coffee_text}>
      {children}
    </div>
  )
}
export default CoffeeText