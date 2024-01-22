import Head from 'next/head'

import Inner from '@/components/layout'
import Hero from '@/components/hero'
import AboutHome from '@/components/sections/AboutHome'

export default function Home() {
  return (
    <>
      <Head>
        <title>Doni&apos;s Coffee</title>
        <meta name="description" content="La Cafeteria de Doni" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Inner>
        <Hero
          title='DONDE CADA TAZA CUENTA UNA HISTORIA DIFERENTE'
          description='DESCUBRE NUESTRO RINCÓN ACOGEDOR, DONDE EL CAFÉ SE CONVIERTE EN ARTE. BIENVENIDO A TU NUEVA CAFETERÍA FAVORITA, ¡BIENVENID@ A DONI&apos;S!'
        />
        <AboutHome />
      </Inner> 
    </>
  )
}
