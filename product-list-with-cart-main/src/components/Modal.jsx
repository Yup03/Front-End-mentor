const Modal = ({ children }) => {
  return (
    <>
      <div className="fixed bottom-0 sm:bottom-auto sm:top-1/2 left-0 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 bg-rose-50 px-8 py-10 text-rose-900 rounded-md z-50 w-full sm:w-[30rem]">
        <img
          src="/assets/images/icon-order-confirmed.svg"
          alt="icon order confimed"
          className="mb-5"
        />
        <h2 className="text-3xl font-bold mb-2 text-rose-900">
          Order Confirmed
        </h2>
        <p className="mb-8 font-semibold text-rose-500">
          We hope you enjoy your food
        </p>
        {children}
      </div>
    </>
  )
}
export default Modal
