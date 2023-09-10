import FilterTag from "./FilterTag"

const FiltersList = ({ filtersArr, removeFilter, clearFilters }) => {
  return (
    <div
      className={`flex items-center bg-white p-4 gap-4 rounded-md shadow-lg transition duration-500 ${
        filtersArr.length > 0
          ? "opacity-100 visible pointer-events-auto -translate-y-1/2"
          : "opacity-0 invisible pointer-events-none translate-x-0"
      }`}
    >
      <ul className="flex-1 flex flex-wrap gap-3">
        {filtersArr.map(filter => (
          <li key={filter} className="filter-btn ">
            <span className="px-2">{filter}</span>
            <button onClick={() => removeFilter(filter)}>
              <img
                src="icon-remove.svg"
                alt="icon-remove"
                className="bg-desaturated-dark-cyan inline-block py-[8px] px-2 hover:bg-very-dark-grayish-cyan transition duration-300"
              />
            </button>
          </li>
        ))}
      </ul>

      <button
        className="hover:underline transition duration-300 text-dark-grayish-cyan underline-offset-4"
        onClick={clearFilters}
      >
        clear
      </button>
    </div>
  )
}

export default FiltersList
