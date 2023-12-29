const In = ({
  label,
  placeholder,
  maxLength,
  minLength,
  pattern,
  dataType,
  id,
  setNumber,
  setName,
  setMonth,
  setYear,
  setCvc,
  value,
}) => {
  const onInputChange = (e) => {
    if (e.target.dataset.type === "name") {
      setName(e.target.value.toUpperCase());
      const warn = e.target.parentNode.querySelector(".warn");
      if (!e.target.value) {
        warn.style.opacity = "1";
        warn.textContent = "Can't be blank";
      } else if (!e.target.checkValidity()) {
        warn.style.opacity = "1";
        warn.textContent = "Wrong format, letters only";
      } else {
        warn.style.opacity = "0";
      }
    } else if (e.target.dataset.type === "number") {
      setNumber(e.target.value);
      const warn = e.target.parentNode.querySelector(".warn");

      if (!e.target.value) {
        warn.style.opacity = "1";
        warn.textContent = "Can't be blank";
      } else if (!e.target.value.match(/^[0-9\s]+$/)) {
        warn.style.opacity = "1";
        warn.textContent = "Wrong format, numbers only";
      } else if (e.target.value.split(" ").join("").length < 16) {
        warn.style.opacity = "1";
        warn.textContent = "Should have more characters";
        e.target.setCustomValidity("Invalid");
      } else {
        warn.style.opacity = "0";
        e.target.setCustomValidity("");
      }

      // Add Space every 4
      document.addEventListener("keydown", (event) => {
        if (event.key === "Backspace") return;
        if (e.target.value?.length === 4) {
          setNumber(e.target.value.padEnd(5, " "));
        } else if (e.target.value?.length === 9) {
          setNumber(e.target.value.padEnd(10, " "));
        } else if (e.target.value?.length === 14) {
          setNumber(e.target.value.padEnd(15, " "));
        }
      });
    } else if (e.target.dataset.type === "month") {
      setMonth(e.target.value);
      const warn = e.target.parentNode.querySelector(".warn");
      if (!e.target.value) {
        warn.style.opacity = "1";
        warn.textContent = "Can't be blank";
      } else if (!e.target.checkValidity()) {
        warn.style.opacity = "1";
        warn.textContent = "Wrong format";
      } else {
        warn.style.opacity = "0";
      }
    } else if (e.target.dataset.type === "year") {
      setYear(e.target.value);
      const warn = e.target.parentNode.querySelector(".warn");
      if (!e.target.value) {
        warn.style.opacity = "1";
        warn.textContent = "Can't be blank";
      } else if (!e.target.checkValidity()) {
        warn.style.opacity = "1";
        warn.textContent = "Wrong format";
      } else {
        warn.style.opacity = "0";
      }
    } else if (e.target.dataset.type === "cvc") {
      setCvc(e.target.value);
      const warn = e.target.parentNode.querySelector(".warn");

      if (!e.target.value) {
        warn.style.opacity = "1";
        warn.textContent = "Can't be blank";
      } else if (!e.target.checkValidity()) {
        warn.style.opacity = "1";
        warn.textContent = "Three numbers at least";
      } else {
        warn.style.opacity = "0";
      }
    }
  };
  return (
    <label className="space-y-2">
      {label ? <span className="label">{label}</span> : null}
      <input
        type="text"
        className="input"
        placeholder={placeholder}
        maxLength={maxLength}
        minLength={minLength}
        pattern={pattern}
        value={value}
        onChange={onInputChange}
        data-type={dataType}
        id={id}
        required
      />
      <div className="warn">Can't be blank</div>
    </label>
  );
};

export default In;
