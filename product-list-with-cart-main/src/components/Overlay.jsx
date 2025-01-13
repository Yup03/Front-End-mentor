import { useProduct } from "../contexts/ProductContext"

const Overlay = () => {
  const { dispatch } = useProduct()

  return (
    <div
      className="fixed top-0 left-0 w-full min-h-screen bg-black opacity-25"
      onClick={() => dispatch({ type: "toggleModal", payload: false })}
    />
  )
}
export default Overlay
