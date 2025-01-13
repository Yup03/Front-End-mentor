import { createContext, useContext, useReducer } from "react"
import data from "../data.json"

const ProductContext = createContext()

const initialState = {
  productsData: data,
  chosenProducts: [],
  showModal: false,
}
const reducer = (state, action) => {
  switch (action.type) {
    case "addProduct": {
      const product = state.productsData[action.payload]

      const chosenProducts = state.chosenProducts
        .map(prod => prod.name)
        .includes(product.name)
        ? [...state.chosenProducts]
        : [...state.chosenProducts, { ...product, quantity: 1 }]

      return {
        ...state,
        chosenProducts,
      }
    }
    case "inc": {
      const chosenProducts = state.chosenProducts.map(prod =>
        prod.name === action.payload
          ? { ...prod, quantity: prod.quantity++ }
          : prod
      )

      return { ...state, chosenProducts }
    }
    case "dec": {
      const product = state.chosenProducts.find(
        prod => prod.name === action.payload
      )
      const chosenProducts = !product.quantity
        ? state.chosenProducts.filter(prod => prod.name !== action.payload)
        : state.chosenProducts.map(prod =>
            prod.name === action.payload
              ? { ...prod, quantity: prod.quantity-- }
              : prod
          )

      return { ...state, chosenProducts }
    }
    case "delete": {
      const chosenProducts = state.chosenProducts.filter(
        prod => prod.name !== action.payload
      )

      return { ...state, chosenProducts }
    }
    case "toggleModal":
      return { ...state, showModal: action.payload }
    case "reset":
      return { ...initialState }
    default:
      throw Error("Unknown action")
  }
}

const ProductProvider = ({ children }) => {
  const [{ productsData, chosenProducts, showModal, indexes }, dispatch] =
    useReducer(reducer, initialState)

  const totalPrice = chosenProducts.reduce(
    (cur, prod) => cur + prod.price * prod.quantity,
    0
  )

  return (
    <ProductContext.Provider
      value={{ productsData, chosenProducts, showModal, totalPrice, dispatch }}
    >
      {children}
    </ProductContext.Provider>
  )
}

const useProduct = () => {
  const contextVal = useContext(ProductContext)
  if (contextVal === undefined)
    throw new Error("ProductContext is used out of ProductProvider")

  return contextVal
}

export { ProductProvider, useProduct }
