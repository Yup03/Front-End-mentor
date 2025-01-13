import { useProduct } from "../contexts/ProductContext"

const ConfirmedProducts = () => {
  const { chosenProducts, totalPrice } = useProduct()

  return (
    <div className="bg-rose-100 p-5 rounded-md mb-8">
      <ul className="space-y-5 mb-10">
        {chosenProducts.map(product => {
          const {
            name,
            quantity,
            price,
            image: { thumbnail },
          } = product
          return (
            <li className="flex items-center gap-3" key={name}>
              <img
                src={thumbnail}
                alt={name}
                className="w-12 h-12 rounded-sm"
              />
              <div className="">
                <h3 className="font-semibold text-sm sm:text-base">{name}</h3>
                <p className="space-x-3">
                  <span className="text-red font-semibold">{quantity}x</span>
                  <span className="text-rose-400">@ ${price}</span>
                </p>
              </div>
              <p className="ml-auto font-semibold text-rose-900">
                ${quantity * price}
              </p>
            </li>
          )
        })}
      </ul>
      <div className="flex justify-between items-center">
        <p className="font-bold text-rose-400">Order Total</p>

        <span className="font-bold text-2xl">${totalPrice}</span>
      </div>
    </div>
  )
}
export default ConfirmedProducts
