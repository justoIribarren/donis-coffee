import { createContext, useContext, useState } from "react"

export const MainContext = createContext()

export function MainProvider({children}){

  const [scrollInstance, setScrollInstance] = useState(null)

  return(
    <MainContext.Provider
      value={{
        scrollInstance,
        setScrollInstance
      }}
    >
      {children}
    </MainContext.Provider>
  )

}

export function useMainContext() {
  return useContext(MainContext)
}