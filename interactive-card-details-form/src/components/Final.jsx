const Final = ({
  setShowForm,
  setName,
  setNumber,
  setMonth,
  setYear,
  setCvc,
}) => {
  const onButtonClick = () => {
    setShowForm(true);
    setName("");
    setNumber("");
    setMonth("");
    setYear("");
    setCvc("");
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="circle">
        <span className="check"></span>
      </div>
      <h2 className="uppercase text-3xl text-[#21092f] mb-4">thank you</h2>
      <p className="text-xl mb-16">We've added your card details</p>
      <button type="button" className="btn" onClick={onButtonClick}>
        Continue
      </button>
    </div>
  );
};
export default Final;
