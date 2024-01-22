import { motion } from 'framer-motion'

import VirtualScroll from '../virtual-scroll'

import styles from './styles.module.scss'
import { anim, slide } from './page-transition'

function Inner({ children }) {

  return (
    <div>
      <motion.div {...anim(slide, .3)} className={styles.slide_back} />
      <motion.div {...anim(slide, .5)} className={styles.slide_front} />
      <div className='page'>
        <VirtualScroll>
          {children}
        </VirtualScroll>
      </div>

    </div>
  )
}
  export default Inner