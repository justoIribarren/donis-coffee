import Hero from "@/components/hero"
import Inner from "@/components/layout"
import StoreSection from "@/components/sections/StoreSection"

function Tiendas(){
  return <Inner>
    <Hero
      title='ENCUENTRA TU DONI&apos;S MÁS CERCANO'
      description='CADA LOCAL ES UN REFUGIO DONDE EL AROMA DEL CAFÉ FRESCO SE MEZCLA CON LA CALIDEZ DE UN ESPACIO DISEÑADO PARA TU DELEITE'
    />  
    <StoreSection />
  </Inner>
}

export default Tiendas