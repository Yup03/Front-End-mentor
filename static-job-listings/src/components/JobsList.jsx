const JobsList = ({ children }) => {
  return (
    <ul className="flex flex-col gap-20 md:gap-10 py-10 md:py-0 max-w-7xl mx-auto">
      {children}
    </ul>
  );
};

export default JobsList;
