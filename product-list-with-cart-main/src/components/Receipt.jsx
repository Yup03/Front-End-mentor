import { useProduct } from "../contexts/ProductContext"
import EmptyOrder from "./EmptyOrder"

const Receipt = ({ children }) => {
  const { chosenProducts } = useProduct()
  return (
    <aside className="bg-rose-50 p-5 flex-grow rounded-md">
      <p className="text-red font-bold text-xl mb-7">
        Your Cart({chosenProducts.length})
      </p>
      {chosenProducts.length > 0 ? children : <EmptyOrder />}
    </aside>
  )
}
export default Receipt
