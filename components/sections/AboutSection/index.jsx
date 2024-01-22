import styles from './styles.module.scss'

function AboutSection() {
  return (
    <section className='section'>
      <div className={styles.about}>
        <div className={styles.about__wrapper}>
          <h2>1</h2>
          <p>En nuestro inicio, producíamos y vendíamos nuestros productos a hoteles, bares, supermercados, estaciones de servicios, entre otros.</p>
        </div>
        <div className={styles.about__wrapper}>
          <p>Abrimos nuestro primer local, con multiples variedades de infusiones, panificados y pasteleria.</p>
          <h2>2</h2>
        </div>
        <div className={styles.about__wrapper}>
          <h2>3</h2>
          <p>Hoy contamos con mas de 10 tiendas en todo el país, y exportamos nuestros productos a todo el mundo.</p>
        </div>
      </div>
    </section>
  )
}

export default AboutSection