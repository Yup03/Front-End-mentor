const Select = ({ options, filter, onFilterChange, onTermChange }) => {
  const renderedItems = options.map((option, idx) => {
    return (
      <option key={idx} value={option.value}>
        {option.label}
      </option>
    );
  });

  return (
    <label className="select-box" aria-label="Filter by Region">
      <select
        value={filter}
        onChange={(e) => {
          onFilterChange(e.target.value);
          onTermChange("");
        }}
        id="select"
      >
        {renderedItems}
      </select>
    </label>
  );
};

export default Select;
