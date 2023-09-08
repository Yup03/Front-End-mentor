import Content from "./Content"
import PicList from "./PicList"
import Order from "./Order"

const Main = ({ handleModal, setCartArr }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:px-16 lg:gap-10">
      <PicList
        handleModal={handleModal}
        styleSwitchBtns="md:hidden md:invisible md:pointer-events-none"
      />
      <div className="px-5 py-7">
        <Content />

        <Order setCartArr={setCartArr} />
      </div>
    </div>
  )
}

export default Main
