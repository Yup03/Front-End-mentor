import { useProduct } from "../contexts/ProductContext"

const Order = ({ product }) => {
  const { name, price, quantity } = product
  const { dispatch } = useProduct()

  return (
    <li className="font-semibold">
      <div className="flex items-center justify-between">
        <div>
          <span>{name}</span>
          <div className="text-rose-500 space-x-2">
            <span className="text-red inline-block mr-2">{quantity}x</span>
            <span className="font-normal">@ {price}</span>
            <span>${price * quantity}</span>
          </div>
        </div>
        <button
          className="border border-rose-300 rounded-full"
          onClick={() => {
            dispatch({ type: "delete", payload: name })
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="10"
            height="10"
            fill="none"
            viewBox="0 0 10 10"
          >
            <path
              fill="#CAAFA7"
              d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"
            />
          </svg>
        </button>
      </div>
      <div className="w-full h-[2px] bg-rose-100 my-3" />
    </li>
  )
}
export default Order
