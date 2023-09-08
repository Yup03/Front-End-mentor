import { useState } from "react"

const Shopping = ({ cartArr, setCartArr }) => {
  const [showCart, setShowCart] = useState(false)

  return (
    <>
      <button onClick={() => setShowCart(c => !c)} className="relative">
        {cartArr.length > 0 && (
          <span className="absolute bg-orange w-5 h-4 text-xs top-0 rounded-full text-white">
            {cartArr[0]?.quantity}
          </span>
        )}
        <img
          src="/icon-cart.svg"
          alt="icon-cart"
          className="opacity-60 hover:opacity-100 duration-300 transition"
        />
      </button>
      {showCart && (
        <div className="w-80 h-44 right-0 top-full absolute rounded-xl shadow-lg z-20 bg-white text-left">
          <span className="inline-block p-5 font-bold">Cart</span>
          <hr className="text-grayish-blue" />
          <div className="flex items-center text-dark-grayish-blue justify-between p-5">
            {cartArr.length > 0 ? (
              cartArr.map(c => (
                <>
                  <img
                    src="/image-product-1-thumbnail.jpg"
                    alt="product"
                    className="w-14 h-14"
                  />
                  <div>
                    <span className="text-sm block font-bold">
                      Fall Limited Edition Sneakers
                    </span>
                    <span>
                      ${c.price} * {c.quantity}{" "}
                      <span className="font-bold text-black">
                        ${c.price * c.quantity}
                      </span>
                    </span>
                  </div>
                  <button
                    onClick={() => {
                      console.log("clicked")

                      setCartArr([])
                    }}
                  >
                    <img src="/icon-delete.svg" alt="icon" />
                  </button>
                </>
              ))
            ) : (
              <span className="inline-block mx-auto">Your cart is empty</span>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default Shopping
