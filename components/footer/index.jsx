import Link from 'next/link'
import CoffeeText from '../coffee-text'
import ButtonsSocials from '../button-socials'
import LinkBorder from '../link-border'

import styles from './styles.module.scss'

function Footer() {
  return(
    <footer className={styles.footer}>
      <CoffeeText>
        <span>mocca</span>
        <span>espresso</span>
        <span>flate white</span>
      </CoffeeText>
      <h2>
        TE ESPERAMOS EN <br/> CUALQUIERA DE <br/> NUESTRAS 
        <Link href='/tiendas' className={styles.footer__link}>
          TIENDAS
          <span className='material-symbols-outlined arrow'>arrow_right_alt</span>
        </Link>
      </h2>
      <div className={styles.footer__details}>
        
        <ButtonsSocials>donis@coffee.com</ButtonsSocials>

        <div> 
          <ButtonsSocials>+54 123 4567 890</ButtonsSocials>
          <span>{`(casa central)`}</span>
        </div>

      </div>
      <div className={styles.footer__social}>
        <LinkBorder> <a href='#hero'> Instagram </a> </LinkBorder>
        <LinkBorder> <a href='#hero'> Facebook </a> </LinkBorder>
        <LinkBorder> <a href='#hero'> X/Twitter </a> </LinkBorder>
        <LinkBorder> <a href='#hero'> Spotify </a> </LinkBorder>
        <LinkBorder> <a href='#hero'> LinkedIn </a> </LinkBorder>
      </div>
    </footer>
  )
}

export default Footer