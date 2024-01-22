import Link from 'next/link'
// import { useRouter } from 'next/router'
import LinkBorder from '../link-border'

import styles from './styles.module.scss'

function Header(){

  // const router = useRouter()

  return (
    <header className={styles.header}>
      <Link className={styles.logo} href='/'><LinkBorder><h1>DONI&apos;S COFFEE</h1>  </LinkBorder></Link>
      <nav >
        <ul className={styles.nav}>
          <li>
            <LinkBorder> <Link href='/nosotros'>Nostros</Link> </LinkBorder>
          </li>
          <li>
            <LinkBorder><Link href='/productos'>Productos</Link></LinkBorder>
          </li>
          <li>
            <LinkBorder><Link href='/tiendas'>Tiendas</Link></LinkBorder>
          </li>
          <li>
            <LinkBorder><Link href='/contacto'>Contacto</Link></LinkBorder>
          </li>
        </ul>
      </nav>
    </header>
  )
}
export default Header