import JobItem from "./JobItem"

const JobsList = ({ filtered, addFilter, filtersArr }) => {
  return (
    <ul className="flex flex-col gap-20 md:gap-10 py-10 md:py-0">
      {filtered.map(job => (
        <JobItem
          job={job}
          key={job.id}
          addFilter={addFilter}
          filtersArr={filtersArr}
        />
      ))}
    </ul>
  )
}

export default JobsList
