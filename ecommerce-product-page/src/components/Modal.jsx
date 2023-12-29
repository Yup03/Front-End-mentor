import PicList from "./PicList";

const Modal = ({ setShowModal, showModal }) => {
  return (
    <>
      {showModal && (
        <div className="hidden invisible pointer-events-none md:block md:visible md:pointer-events-auto absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 p-16 md:z-50 max-w-3xl">
          <button
            className="absolute top-10 right-16 hover:invert-[43%] hover:sepia-[94%] hover:saturate-[3118%] hover:hue-rotate-[167deg] hover:brightness-[103%)]hover:contrast-[101%] invert-[99%] sepia-[4%] saturate-[696%] hue-rotate-[214deg] brightness-[118%] contrast-[100%]"
            onClick={() => setShowModal(false)}
          >
            <img src="icon-close.svg" alt="icon-close" />
          </button>
          <PicList styleSwitchBtns="" />
        </div>
      )}
    </>
  );
};

export default Modal;
