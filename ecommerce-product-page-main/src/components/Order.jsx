import { useState } from "react"

const Order = ({ setCartArr }) => {
  const [quantity, setQuantity] = useState(0)
  const price = 125
  return (
    <div>
      <div className="flex lg:flex-col items-center lg:items-start gap-4 mb-5 lg:mb-10">
        <div className="inline-flex items-center gap-4">
          <span className="font-bold text-2xl"> ${price.toFixed(2)}</span>
          <span className="bg-pale-orange text-orange font-bold px-2 rounded-md">
            50%
          </span>
        </div>
        <span className="ml-auto md:ml-0 line-through text-grayish-blue font-bold">
          $250.00
        </span>
      </div>
      <div className="md:flex md:items-start md:gap-3">
        <div
          className="flex items-center justify-between py-3
          px-5 bg-light-grayish-blue rounded-lg mb-4 md:basis-1/4"
        >
          <button
            onClick={() => {
              if (quantity - 1 < 0) return
              setQuantity(q => q - 1)
            }}
          >
            <img
              src="icon-minus.svg"
              alt="icon-minus"
              className="hover:opacity-50 duration-300 transition"
            />
          </button>
          <span className="font-bold">{quantity}</span>
          <button onClick={() => setQuantity(q => q + 1)}>
            <img
              src="icon-plus.svg"
              alt="icon-plus"
              className="hover:opacity-50 duration-300 transition"
            />
          </button>
        </div>
        <button
          className="block w-full rounded-lg bg-orange text-white font-bold py-3 md:w-fit md:flex-1 hover:opacity-50 transition duration-300"
          onClick={() => {
            if (!quantity) return
            setCartArr([{ price, quantity }])
            setQuantity(0)
          }}
        >
          Add to cart
        </button>
      </div>
    </div>
  )
}

export default Order
