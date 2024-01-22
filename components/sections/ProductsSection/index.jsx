import Image from 'next/image'
import styles from './styles.module.scss'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function ProductsSection() {

  useGSAP(() => {

    gsap.to('[data-products-text]', {
      scrollTrigger: {
        trigger: '[data-products-trigger]',
        pin: '[data-products-text]',
        start: 'top top',
        end: 'bottom bottom', 
      },
    })
  }, [])

  return (
    <section className='section'>
      <div className={styles.products} data-products-trigger>
        <div className={styles.products__wrapper}>
          <div className={styles.products__img}>
            <Image
              src='/coissant.png'
              alt='coissant'
              width={200}
              height={150}
            />
          </div>
          <div className={styles.products__img}>
            <Image
              src='/granola.png'
              alt='granola'
              width={200}
              height={150}
            />
          </div>
          <div className={styles.products__img}>
            <Image
              src='/cookie.png'
              alt='cookie'
              width={200}
              height={150}
            />
          </div>
          <div className={styles.products__img}>
            <Image
              src='/huevo.png'
              alt='huevo'
              width={200}
              height={150}
            />
          </div>
          <div className={styles.products__img}>
            <Image
              src='/latte.png'
              alt='latte'
              width={200}
              height={150}
            />
          </div>
        </div>
        <div className={styles.products__text} data-products-text>
          <p>
            Sumérgete en un mundo de opciones deliciosas y descubre la abundancia de aromas y sabores que tenemos para ofrecerte.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection