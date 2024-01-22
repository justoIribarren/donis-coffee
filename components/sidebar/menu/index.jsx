import Link from "next/link"
import { motion } from "framer-motion"

import Inner from "@/components/layout"
import NavLink from "@/components/header/Links"
import { anim, slideSidebar } from "@/components/layout/page-transition"

import styles from '../styles.module.scss'

const LinkPath = [
  {
    path: '/',
    page: 'Inicio'
  },
  {
    path: '/nosotros',
    page: 'Nosotros'
  },
  {
    path: '/productos',
    page: 'Productos'
  },
  {
    path: '/tiendas',
    page: 'Tiendas'
  },
  {
    path: '/contacto',
    page: 'Contact'
  }
]

function Nav({ isActive }){
  return (
    <>
    {/* <div className={styles.sidebar__wrapper}></div> */}
      <motion.div {...anim(slideSidebar, .3, .5)} className={styles.sidebar__slide_back} />
      <motion.div {...anim(slideSidebar, .5, .3)} className={styles.sidebar__slide_front} />
      <nav>
        <ul className={styles.sidebar__nav}>
          {LinkPath.map((link, i) => <NavLink key={i} path={link.path} isActive={isActive}>{link.page}</NavLink>)}
        </ul>
      </nav>
      {/* <div className={styles.sidebar__back} /> */}
      {/* </div> */}
    </>
  )
}

export default Nav