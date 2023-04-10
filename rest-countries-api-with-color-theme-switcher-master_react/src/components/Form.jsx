const Form = ({ onTermChange, term, options }) => {
  const renderedItems = options.map((option) => {
    return <option value={option.value}>{option.label}</option>;
  });

  return (
    <form className="form">
      <div className="container form-w">
        <label className="input-box" aria-label="Search for a country">
          <i className="fa fa-magnifying-glass input-icon"></i>
          <input
            type="text"
            placeholder="Search for a country..."
            id="text"
            value={term}
            onChange={(e) => onTermChange(e.target.value)}
          />
        </label>
        <label className="select-box" aria-label="Filter by Region">
          <select id="select">{renderedItems}</select>
        </label>
      </div>
    </form>
  );
};

export default Form;
