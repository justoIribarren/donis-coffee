import { useEffect, useRef } from 'react'
import gsap from 'gsap'

import styles from './styles.module.scss'

function LinkBorder({ children }){

  const linkBorder = useRef(null)
  const timeline = useRef(null)

  useEffect(() => {
    timeline.current = gsap.timeline({paused:true})
    timeline.current
      .to(linkBorder.current, {width: '100%', duration: .35, ease: 'power3.in'}, 'enter')
      .to(linkBorder.current, {x: '101%', duration: .25}, 'exit')
  }, [])

  const handleOnMouseEnter = () => timeline.current.tweenFromTo('enter', 'exit')

  const handleOnMouseLeave = () => timeline.current.play()

  return (
    <div 
      className={styles.link}
      onMouseEnter={e => handleOnMouseEnter(e)}
      onMouseLeave={e => handleOnMouseLeave(e)}
      data-link-border__container
    >
      {children}
      <div data-link-border ref={linkBorder} className={styles.link__border_bottom} />
    </div>
  )
}

export default LinkBorder