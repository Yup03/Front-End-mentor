const Search = ({ term, onTermChange, onFilterChange }) => {
  return (
    <label className="input-box" aria-label="Search for a country">
      <i className="fa fa-magnifying-glass input-icon"></i>
      <input
        type="text"
        placeholder="Search for a country..."
        id="text"
        value={term}
        onChange={(e) => {
          onTermChange(e.target.value);
          onFilterChange("");
        }}
      />
    </label>
  );
};

export default Search;
