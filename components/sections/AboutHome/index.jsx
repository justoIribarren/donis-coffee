import Image from 'next/image'
import styles from './styles.module.scss'

function AboutHome(){
  return (
    <section className='section'>
      <div className={styles.home}>
        <h2>DONI&apos;S</h2>
        
        <div className={`${styles.home__img} ${styles.horizontal}`} id='img_1'>
          <Image
            src='/01.jpg'
            alt='01' 
            className={styles.vertical_img}
            width={150}
            height={300}
          />
          <span className='home_span'>PARA TODO TIPO DE PERSONA</span>
        </div>

        <div className={`${styles.home__img} ${styles.vertical}`} id='img_2'>
          <Image
            src='/02.jpg'
            alt='02' 
            className={styles.vertical_img}
            width={150}
            height={300}
          />
          <span>CÁLIDO Y ACOJEDOR</span>
        </div>

        <div className={`${styles.home__img} ${styles.horizontal}`} id='img_3'>
          <div className={styles.home__span_wrapper}>

            <span>DESDE 2014</span>
            <span>EL MEJOR SERVICIO</span>

          </div>

          <Image
            src='/03.jpg'
            alt='03' 
            className={styles.vertical_img}
            width={200}
            height={100}
          />
        </div>

        <div className={`${styles.home__img} ${styles.vertical}`} id='img_4'>
          <span>CAFE DE ESPECIALIDAD</span>
          <Image
            src='/04.jpg'
            alt='04' 
            className={styles.vertical_img}
            width={150}
            height={200}
          />
        </div>
      </div>
    </section>
  )
}

export default AboutHome