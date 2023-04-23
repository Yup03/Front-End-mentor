import { useState } from "react";
import Forms from "./Forms";
import Final from "./Final";

const App = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [cvc, setCvc] = useState("");
  const [showForm, setShowForm] = useState(true);

  return (
    <main
      className="flex lg:flex-col min-h-screen max-w-full bg-bg bg-no-repeat bg-[length:33rem_100%] lg:bg-[length:100%_33rem] sm:bg-[length:100%_24rem] lg:bg-top lg:pb-[6.4rem]"
      style={{
        backgroundImage: "url('../../images/bg-main-desktop.png')",
      }}
    >
      <div className="flex flex-col gap-10 lg:gap-0 justify-center basis-[50%] pl-[3.2rem] lg:pl-0 lg:pt-[3.2rem]">
        {/* CARD 1 */}
        <div
          className="flex flex-col lg:self-center lg:-translate-y-[43%] lg:-translate-x-[8%] justify-between bg-no-repeat bg-cover sm:bg-contain bg-transparent w-[44.7rem] sm:w-[30rem] h-[24.5rem] sm:h-[16rem] shadow-lg p-10 lg:order-2 lg:relative lg:z-10"
          style={{
            backgroundImage: "url('../../images/bg-card-front.png')",
          }}
        >
          <div className="inline-flex gap-5 items-center ">
            <span className="w-[5rem] h-[5rem] sm:w-[3rem] sm:h-[3rem] bg-bg rounded-full inline-block"></span>
            <span className="w-[3rem] h-[3rem] sm:w-[1.5rem] sm:h-[1.5rem] border border-bg rounded-full inline-block"></span>
          </div>
          <div className="text-bg space-y-5">
            <h2 className="text-3xl sm:text-2xl">
              {number || "0000 0000 0000 0000"}
            </h2>
            <div className="flex justify-between text-xl sm:text-base font-light">
              <h1 className="w-[250px]">{name || "jane appleased"}</h1>
              <div>
                {month || "00"}/{year || "00"}
              </div>
            </div>
          </div>
        </div>
        {/* CARD 2 */}
        <div
          className="flex items-center justify-end pr-20 bg-no-repeat bg-cover sm:bg-contain bg-transparent w-[44.7rem] sm:w-[30rem] h-[24.5rem] sm:h-[17rem] self-end lg:self-center lg:translate-x-[8%] shadow-lg"
          style={{
            backgroundImage: "url('../../images/bg-card-back.png')",
          }}
        >
          <div className="text-bg text-base">{cvc || "000"}</div>
        </div>
      </div>

      <div className=" basis-[50%] flex items-center justify-center">
        {showForm ? (
          <Forms
            setName={setName}
            setNumber={setNumber}
            setMonth={setMonth}
            setYear={setYear}
            setCvc={setCvc}
            setShowForm={setShowForm}
            name={name}
            number={number}
            month={month}
            year={year}
            cvc={cvc}
          />
        ) : (
          <Final
            setShowForm={setShowForm}
            setName={setName}
            setNumber={setNumber}
            setMonth={setMonth}
            setYear={setYear}
            setCvc={setCvc}
          />
        )}
      </div>
    </main>
  );
};

export default App;
