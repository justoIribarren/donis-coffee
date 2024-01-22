export const anim = (variants, custom) => {
  return{
    initial: 'initial',
    animate: 'enter',
    exit: 'exit',
    variants,
    custom
  }
}

export const slide = {
  initial: {
    top: '0'
  },
  enter: (i) => ({
    top:'-100vh',
    transition: {
      duration: .75,
      delay: .75,
      ease: [0.65, 0, 0.35, 1]
    },
    transitionEnd: { top: '100vh' }
  }),
  exit: (i) => ({
    top: '0',
    transition: {
      duration: .75,
      delay: i,
      ease: [0.65, 0, 0.35, 1]
    }
  })
}


export const slideSidebar = {
  initial: {
    top: '100%'
  },
  enter: (i) => ({
    top:'0%',
    transition: {
      duration: .75,
      delay: i,
      ease: [0.65, 0, 0.35, 1]
    },
    // transitionEnd: { top: '100vh' }
  }),
  exit: (j) => ({
    top: '100%',
    transition: {
      duration: .75,
      delay: j,
      ease: [0.65, 0, 0.35, 1]
    }
  })
}