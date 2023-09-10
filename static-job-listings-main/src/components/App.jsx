import { useState, useEffect } from "react"
import JobsList from "./JobsList"
import FiltersList from "./FiltersList"

const App = () => {
  useEffect(() => {
    const getJobs = () =>
      fetch("./data.json")
        .then(res => res.json())
        .then(data => setJobsArr(data))

    getJobs()
  }, [])

  const [jobsArr, setJobsArr] = useState([])
  const [filtersArr, setFiltersArr] = useState([])

  const addFilter = filter => {
    setFiltersArr(curArr => [...new Set([...curArr, filter])])
  }
  const removeFilter = filter => {
    setFiltersArr(curArr => curArr.filter(filt => filt !== filter))
  }
  const clearFilters = () => {
    setFiltersArr([])
  }
  const filtered =
    filtersArr.length > 0
      ? jobsArr.filter(job => {
          return filtersArr.every(
            filt =>
              job.role === filt ||
              job.level === filt ||
              job.languages.some(lang => lang === filt) ||
              job.tools.some(tool => tool === filt)
          )
        })
      : [...jobsArr]

  return (
    <div>
      <div className="back"></div>
      <div className="px-5 md:px-10 lg:px-24 relative">
        <FiltersList
          filtersArr={filtersArr}
          removeFilter={removeFilter}
          clearFilters={clearFilters}
        />
        <JobsList
          filtered={filtered}
          addFilter={addFilter}
          filtersArr={filtersArr}
        />
      </div>
    </div>
  )
}

export default App
