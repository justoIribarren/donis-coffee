import styles from './styles.module.scss'

function ButtonsSocials({ children }){

  const handleOnClick = e => {
    
  }

  return(
    <button onClick={handleOnClick} className={styles.button_socials}>
        {children}
        <div className={styles.button_socials__border}/>
    </button>
  )
}

export default ButtonsSocials