import { useState } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { AnimatePresence } from "framer-motion"

import Nav from "./menu"

import styles from './styles.module.scss'
import Lenis from "@studio-freight/lenis"

function Sidebar(){
  
  const [ isActive, setIsActive ] = useState(false)

  useGSAP(() => {
    gsap.to('[data-button]', {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {gsap.to('[data-button]', {scale: 1, duration: .35})},
        onEnterBack: () => {gsap.to('[data-button]', {scale: 0, duration: .35})},
      },
    })
  }, [])

  const handleOnClick = () => {
    setIsActive(!isActive)
  }


  return(
    <div className={styles.sidebar}>
      <div className={styles.sidebar__button} style={isActive ? {border: '1px solid var(--background)'} : {}} onClick={handleOnClick} data-button>
        <div className={`${styles.sidebar__burger} ${isActive ? styles.sidebar__burger_active : ''}`} />
      </div>

      <AnimatePresence>
        {isActive && <Nav isActive={setIsActive}/> }
      </AnimatePresence>

      <div className={styles.sidebar__back} style={isActive ? {backgroundColor: '#1C222350', visibility: 'visible'} : {}}/>
      
    </div>
  )
}

export default Sidebar