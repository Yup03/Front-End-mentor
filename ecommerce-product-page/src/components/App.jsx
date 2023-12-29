import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Modal from "./Modal";
import Shopping from "./Shopping";
import PicList from "./PicList";
import Order from "./Order";
import Overlay from "./Overlay";

const App = () => {
  const [showModal, setShowModal] = useState(false);
  const [cartArr, setCartArr] = useState([]);

  const handleModal = () => {
    if (!showModal) setShowModal(true);
  };

  return (
    <div className="lg:px-16">
      <Header>
        <Shopping cartArr={cartArr} setCartArr={setCartArr} />
      </Header>
      <Main
        picListEl={
          <PicList
            handleModal={handleModal}
            styleSwitchBtns="md:hidden md:invisible md:pointer-events-none"
          />
        }
        orderEl={<Order setCartArr={setCartArr} />}
      />
      <Modal setShowModal={setShowModal} showModal={showModal} />
      <Overlay showModal={showModal} />
    </div>
  );
};

export default App;
