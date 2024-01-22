import { useEffect } from 'react'
import gsap from 'gsap'
import styles from './styles.module.scss'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

function TitleMotion() {
  
  let xPercent = 0
  let direction = -1
  
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    requestAnimationFrame(animation)

    gsap.to('[data-slider]', {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        // eslint-disable-next-line react-hooks/exhaustive-deps
        onUpdate: e => direction = e.direction * -1
      },
      // x: '-=300px'
    })

  }, [])

  const animation = () => {
    if ( xPercent <= -100) xPercent = 0
    if ( xPercent > 0) xPercent = -100
    gsap.set('[data-first-text]', {xPercent: xPercent})
    gsap.set('[data-second-text]', {xPercent: xPercent})
    xPercent += 0.08 * direction
    requestAnimationFrame(animation)
  }

  return <div className={styles.slider}>
    <div data-slider className={styles.slider__wrapper}>
      <span data-first-text>DONI&apos;S COFFEE -&nbsp;</span>
      <span data-second-text>DONI&apos;S COFFEE -&nbsp;</span>
    </div>
  </div>
}
export default TitleMotion