import Tag from "./Tag";

const JobItem = ({ job, children }) => {
  return (
    <div className="bg-white flex flex-col md:flex-row items-start md:items-center md:gap-4 px-5 pb-5 md:py-5 font-bold rounded-lg shadow-lg ">
      <img
        src={job.logo}
        alt={`${job.company} logo`}
        className="-mt-[44px] md:mt-0 mb-2 md:mb-0"
      />

      <div className="mb-4">
        <div className="inline-flex items-center mb-3 flex-wrap">
          <span className="text-desaturated-dark-cyan mr-5">{job.company}</span>
          <div className="">
            {job.new && <Tag label="NEW!" bg="bg-[#5ba4a4]" />}
            {job.featured && <Tag label="FEATURED" bg="bg-[#2c3a3a]" />}
          </div>
        </div>
        <p className="mb-2">{job.position}</p>
        <div className="text-dark-grayish-cyan font-medium flex place-items-center">
          <span>{job.postedAt}</span>
          <span className="dot"></span>
          <span>{job.contract}</span>
          <span className="dot"></span>
          <span>{job.location}</span>
        </div>
      </div>

      <div className="h-[2px] bg-light-grayish-cyan-alt w-full mb-4 md:hidden"></div>

      <ul className="flex md:ml-auto flex-wrap gap-4">{children}</ul>
    </div>
  );
};

export default JobItem;
