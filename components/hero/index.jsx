import CoffeeText from '../coffee-text'
import TitleMotion from '../title-motion'
import styles from './styles.module.scss'

function Hero({ title, description }) {
  return (
    <main className={styles.main} id='hero'>
      <div className={styles.hero}>
        <h2>
          {title}
        </h2>
        
        <CoffeeText>
          <span>latte</span>
          <span>capuccino</span>
          <span>té</span>
        </CoffeeText>

        <p className={styles.description}>
          {description}
        </p>
      </div>
      <TitleMotion />
    </main>
  )
}

export default Hero