import { useProduct } from "../contexts/ProductContext"
import Order from "./Order"

const OrderList = () => {
  const { chosenProducts, totalPrice } = useProduct()

  return (
    <>
      <ul>
        {chosenProducts.map((product, idx) => (
          <Order key={idx} product={product} />
        ))}
      </ul>
      <div className="flex w-full justify-between items-center mb-5">
        <h2 className="text-rose-900 opacity-85 font-semibold">Order Total</h2>
        <p className="text-2xl font-bold text-rose-900">${totalPrice}</p>
      </div>
      <p className="text-rose-500 bg-rose-100 py-4 px-2 rounded-md mb-4">
        This is a <strong>carbon neutral</strong> delivery
      </p>
    </>
  )
}
export default OrderList
