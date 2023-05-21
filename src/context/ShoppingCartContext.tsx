import { ReactNode, createContext, useContext } from "react"

type ShoppingCartProviderProps = {
  children: ReactNode
}

type ShoppingCartContext = {
  getItemQuantity: (id: number) => number
  increaseCartQuantity: (id: number) => void
  decreaseCartQuantity: (id: number) => void
  removeFromCart: (id: number) => void
}

const ShoppingCartContext = createContext({} as ShoppingCartContext)


//This is the radio that listens for context
export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

//This is the radio station that broadcasts the context
export function ShoppingCartProvider({children}  : ShoppingCartProviderProps) {
  return (
    <ShoppingCartContext.Provider value={{}}>
      {children}
    </ShoppingCartContext.Provider>
  )
}