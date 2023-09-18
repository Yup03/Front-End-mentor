import { useState, useEffect } from "react";
import JobsList from "./JobsList";
import JobItem from "./JobItem";
import FiltersList from "./FiltersList";
import FilterTag from "./FilterTag";

const App = () => {
  useEffect(() => {
    const getJobs = () =>
      fetch("./data.json")
        .then((res) => res.json())
        .then((data) => setJobsArr(data));

    getJobs();
  }, []);

  const [jobsArr, setJobsArr] = useState([]);
  const [filtersArr, setFiltersArr] = useState([]);

  const addFilter = (filter) => {
    setFiltersArr((curArr) => [...new Set([...curArr, filter])]);
  };
  const removeFilter = (filter) => {
    setFiltersArr((curArr) => curArr.filter((filt) => filt !== filter));
  };
  const clearFilters = () => {
    setFiltersArr([]);
  };
  const filtered =
    filtersArr.length > 0
      ? jobsArr.filter((job) => {
          return filtersArr.every(
            (filt) =>
              job.role === filt ||
              job.level === filt ||
              job.languages.some((lang) => lang === filt) ||
              job.tools.some((tool) => tool === filt)
          );
        })
      : [...jobsArr];

  return (
    <div>
      <div className="back"></div>
      <div className="px-5 md:px-10 lg:px-24 relative">
        <FiltersList
          filtersArr={filtersArr}
          removeFilter={removeFilter}
          clearFilters={clearFilters}
        />
        <JobsList>
          {filtered.map((job) => (
            <JobItem job={job} key={job.id}>
              <FilterTag
                addFilter={addFilter}
                filtersArr={filtersArr}
                removeFilter={removeFilter}
              >
                {job.role}
              </FilterTag>
              <FilterTag
                addFilter={addFilter}
                filtersArr={filtersArr}
                removeFilter={removeFilter}
              >
                {job.level}
              </FilterTag>
              {job.languages.map((lang, i) => (
                <FilterTag
                  key={i * 100}
                  addFilter={addFilter}
                  filtersArr={filtersArr}
                  removeFilter={removeFilter}
                >
                  {lang}
                </FilterTag>
              ))}
              {job.tools.map((tool, i) => (
                <FilterTag
                  key={i * 100}
                  addFilter={addFilter}
                  filtersArr={filtersArr}
                  removeFilter={removeFilter}
                >
                  {tool}
                </FilterTag>
              ))}
            </JobItem>
          ))}
        </JobsList>
      </div>
    </div>
  );
};

export default App;
