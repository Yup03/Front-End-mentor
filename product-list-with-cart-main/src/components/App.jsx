import Modal from "./Modal"
import ProductsList from "./ProductsList"
import Receipt from "./Receipt"
import ConfirmedProducts from "./ConfirmedProducts"
import BtnOrder from "./BtnOrder"
import Overlay from "./Overlay"
import OrderList from "./OrderList"
import { useProduct } from "../contexts/ProductContext"

const App = () => {
  const { dispatch, showModal } = useProduct()

  return (
    <div className="flex flex-col lg:flex-row items-start mx-auto max-w-[1600px] gap-4">
      <ProductsList />
      <Receipt>
        <OrderList />
        <BtnOrder
          handleClick={() => dispatch({ type: "toggleModal", payload: "true" })}
        >
          confirm order
        </BtnOrder>
      </Receipt>
      {showModal && (
        <>
          <Modal>
            <ConfirmedProducts />
            <BtnOrder handleClick={() => dispatch({ type: "reset" })}>
              Start New Order
            </BtnOrder>
          </Modal>
          <Overlay />
        </>
      )}
    </div>
  )
}

export default App
