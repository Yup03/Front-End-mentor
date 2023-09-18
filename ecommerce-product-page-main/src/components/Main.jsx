import Content from "./Content";

const Main = ({ picListEl, orderEl }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center lg:gap-10 max-w-7xl mx-auto">
      {picListEl}
      <div className="px-5 py-7">
        <Content />
        {orderEl}
      </div>
    </div>
  );
};

export default Main;
