const Pic = ({ imgSrc, curImg, handleModal, num }) => {
  return (
    <button className="md:rounded-xl" onClick={handleModal}>
      <img
        src={imgSrc}
        alt="image-product"
        className={`md:rounded-xl  transition duration-300 ease-in ${
          curImg === num
            ? "opacity-100 relative translate-x-0 pointer-events-auto visible"
            : `opacity-0 absolute pointer-events-none invisible ${
                num - curImg >= 0 ? "" : "-"
              }translate-x-[${Math.abs(num - curImg) * 100}%]`
        }`}
      />
    </button>
  );
};

export default Pic;
