const Stats = ({ remaining, handleClearCompleted }) => {
  return (
    <div className="box text-light-grayish-blue-light dark:text-very-dark-grayish-blue-dark mb-5 md:mb-0 rounded-b-lg">
      <p>{remaining} items left</p>
      <button
        className="ml-auto dark:hover:text-very-light-grayish-blue filter-btn"
        onClick={handleClearCompleted}
      >
        Clear Completed
      </button>
    </div>
  )
}

export default Stats
