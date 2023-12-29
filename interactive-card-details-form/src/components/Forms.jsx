import In from "./In";
const Forms = ({
  setName,
  setNumber,
  setMonth,
  setYear,
  setCvc,
  setShowForm,
  name,
  number,
  month,
  year,
  cvc,
}) => {
  const onFormsSubmit = (e) => {
    e.preventDefault();
    setShowForm(false);
  };

  return (
    <form
      className="flex flex-col gap-5 basis-[50%] lg:basis-[80%] sm:basis-full sm:px-24"
      onSubmit={onFormsSubmit}
    >
      <In
        label="cardholder name"
        placeholder="e.g. Jane Appleseed"
        dataType="name"
        setName={setName}
        value={name}
        pattern="[A-Za-z\s]+"
        maxLength={30}
      />
      <In
        label="card number"
        placeholder="e.g. 1234 5678 9123 0000"
        maxLength={19}
        // minLength={19}
        pattern="^[0-9\s]+$"
        dataType="number"
        setNumber={setNumber}
        value={number}
      />
      <div className="">
        <label htmlFor="month" className="label pb-3">
          exp. date (mm/yy)
        </label>
        <div className="grid grid-cols-2 gap-5">
          <div className="grid grid-cols-2 gap-3">
            <In
              placeholder="MM"
              maxLength={2}
              dataType="month"
              setMonth={setMonth}
              value={month}
              pattern="^(?:[1-9]|0[1-9]|1[0-2])"
              id="month"
            />
            <In
              placeholder="YY"
              maxLength={2}
              dataType="year"
              setYear={setYear}
              value={year}
              pattern="[0-9][0-9]"
            />
          </div>
          <In
            placeholder="e.g. 123"
            maxLength={3}
            dataType="cvc"
            setCvc={setCvc}
            value={cvc}
            pattern="^[0-9\s]+$"
            minLength={3}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        confirm
      </button>
    </form>
  );
};

export default Forms;
