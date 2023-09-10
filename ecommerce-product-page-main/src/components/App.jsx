import { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Modal from "./Modal";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const [cartArr, setCartArr] = useState([]);

  const handleModal = () => {
    if (!showModal) setShowModal(true);
  };

  return (
    <div className="lg:px-16">
      <Header cartArr={cartArr} setCartArr={setCartArr} />
      <Main handleModal={handleModal} setCartArr={setCartArr} />
      <Modal setShowModal={setShowModal} showModal={showModal} />
      <div
        className={`fixed top-0 left-0 w-screen h-screen bg-black opacity-70 hidden invisible pointer-events-none md:z-40 ${
          showModal ? "md:block md:visible md:pointer-events-auto" : ""
        }`}
      ></div>
    </div>
  );
};

export default App;
