import Hero from "@/components/hero"
import Inner from "@/components/layout"
import ProductsSection from "@/components/sections/ProductsSection"

function Productos(){
  return  <Inner>
    <Hero
      title='UN BANQUETE DE SABORES PARA CADA PALADAR'
      description='DESCUBRE UN MUNDO DE EXQUISITECES EN NUESTRA SECCIÓN DE PRODUCTOS, DONDE LA ARTESANÍA Y LA CALIDAD SE ENCUENTRAN'
    />
    <ProductsSection />
  </Inner>
}

export default Productos