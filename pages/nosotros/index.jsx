import Inner from "@/components/layout"
import Hero from "@/components/hero"
import AboutSection from "@/components/sections/AboutSection"
function About(){
  
  return <Inner>
    <Hero
      title='NUESTRA MISIÓN VA MÁS ALLÁ DE SERVIR CAFÉ'
      description='QUEREMOS DESPERTAS TUS SENTIDOS, INSPIRAR MOMENTOS ESPECIALES Y  CONSTRUIR CONEXIONES A TRAVÉS DE LA PASIÓN COMPARTIDA POR ESTA BEBIDA'
    />
    
    <AboutSection />
    
  </Inner>
}

export default About