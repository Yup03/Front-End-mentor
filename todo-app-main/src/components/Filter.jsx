const Filter = ({ setFilter, filter }) => {
  return (
    <div className="box rounded-lg font-bold  text-Dark-grayish-blue-light dark:text-Dark-grayish-blue-dark flex justify-center md:absolute md:top-0 md:left-1/2 md:-translate-x-1/2 md:bg-transparent">
      <button
        className={`filter-btn dark:hover:text-very-light-grayish-blue ${
          filter === "all" ? "text-bright-blue" : ""
        }`}
        onClick={() => setFilter("all")}
      >
        All
      </button>
      <button
        className={`filter-btn dark:hover:text-very-light-grayish-blue ${
          filter === "active" ? "text-bright-blue" : ""
        }`}
        onClick={() => setFilter("active")}
      >
        Active
      </button>
      <button
        className={`filter-btn dark:hover:text-very-light-grayish-blue ${
          filter === "completed" ? "text-bright-blue" : ""
        }`}
        onClick={() => setFilter("completed")}
      >
        Completed
      </button>
    </div>
  )
}

export default Filter
