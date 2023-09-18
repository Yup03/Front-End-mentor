const Overlay = ({ showModal }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-screen h-screen bg-black opacity-70 hidden invisible pointer-events-none md:z-40 ${
        showModal ? "md:block md:visible md:pointer-events-auto" : ""
      }`}
    ></div>
  );
};

export default Overlay;
