import { useProduct } from "../contexts/ProductContext"
import Button from "./Button"

const AddToCartBtn = ({ idx, product, quantity }) => {
  const { dispatch } = useProduct()

  return (
    <button
      onClick={() => {
        if (quantity > 0) return
        dispatch({ type: "addProduct", payload: idx })
      }}
      className={`border rounded-full border-rose-500 hover:border-red px-4 py-2 absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2  inline-flex justify-between items-center  gap-2 group text-sm shadow-md min-w-32 ${
        quantity ? "bg-red" : "bg-rose-50"
      }`}
    >
      {!quantity ? (
        <>
          <img src="./assets/images/icon-add-to-cart.svg" alt="add to cart" />
          <span className="group-hover:text-red whitespace-nowrap">
            Add to Cart
          </span>
        </>
      ) : (
        <>
          <Button
            handleClick={() => {
              dispatch({ type: "dec", payload: product.name })
            }}
          >
            -
          </Button>
          <span className="text-rose-50 font-semibold">{quantity}</span>
          <Button
            handleClick={() => {
              dispatch({ type: "inc", payload: product.name })
            }}
          >
            +
          </Button>
        </>
      )}
    </button>
  )
}
export default AddToCartBtn
