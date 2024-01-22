import dynamic from 'next/dynamic'

const VirtualScrollOnlyInClient = dynamic(
  () => import('./virtual-scroll-client'),
  {ssr: false}
)

function VirtualScroll({ children }){

  return (
    <>
      <div className='virtual-scroll'>
        {children}
      </div>
      <VirtualScrollOnlyInClient />
    </>
  )
}

export default VirtualScroll