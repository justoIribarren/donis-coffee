import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

import { useMainContext } from "@/context/MainContext"

function VirtualScrollClient() {

  const { setScrollInstance } = useMainContext()

  useEffect(() => {

    // Empezar en la posicion 0 del documento
    window.scrollTo(0, 0)
    // Normalizar el scroll (arregla un pobrlema con gsap)
    // ScrollTrigger.normalizeScroll(true)

    // Inicializar lenis
    const lenisScroll = new Lenis({
      lerp: 0.1
    })

    // sincronizar lenis con gsap
    lenisScroll.on('scroll', ScrollTrigger.update)
    const onTick = time => {
      lenisScroll.raf(time * 1000)
    } 
    gsap.ticker.add(onTick)

    // Actualizar gsap
    ScrollTrigger.refresh()
    // --------------------------
    setScrollInstance(lenisScroll)

    return () => {
      // Limpiar cuando se desmonte el componente
      gsap.ticker.remove(onTick)
      lenisScroll.off('scroll', ScrollTrigger)
      lenisScroll.destroy()
      setScrollInstance(null)
    }
  }, [])

  return null
}

export default VirtualScrollClient