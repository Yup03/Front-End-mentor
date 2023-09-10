const FilterTag = ({ children, addFilter, filtersArr }) => {
  return (
    <li>
      <button
        className={`space-x-3 filter-btn transition duration-500 hover:text-white hover:bg-desaturated-dark-cyan py-1 px-2 ${
          filtersArr.includes(children)
            ? "border border-desaturated-dark-cyan shadow-inner shadow-desaturated-dark-cyan"
            : ""
        }`}
        onClick={() => addFilter(children)}
      >
        {children}
      </button>
    </li>
  )
}

export default FilterTag
