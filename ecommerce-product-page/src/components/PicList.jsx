import { useState } from "react";
import Pic from "./Pic";
import PicThumb from "./PicThumb";
import SwitchBtn from "./SwitchBtn";

const PicList = ({ handleModal, styleSwitchBtns }) => {
  const [curImg, setCurImg] = useState(1);
  const numberOfImgs = Array.from({ length: 4 }, (_, idx) => idx + 1);

  const handleNext = () => {
    setCurImg((c) => c + 1);
  };
  const handlePrevious = () => {
    setCurImg((c) => c - 1);
  };

  return (
    <div className="relative">
      {curImg > 1 && (
        <SwitchBtn
          imgSrc="icon-previous.svg"
          handleSwitch={handlePrevious}
          position="left-5 md:left-0 md:-translate-x-1/2"
          styleSwitchBtns={styleSwitchBtns}
        />
      )}
      <div className="relative overflow-hidden">
        {numberOfImgs.map((idx) => (
          <Pic
            imgSrc={`image-product-${idx}.jpg`}
            curImg={curImg}
            setCurImg={setCurImg}
            handleModal={handleModal}
            styleSwitchBtns={styleSwitchBtns}
            num={idx}
            key={idx}
          />
        ))}
      </div>

      <div className="hidden invisible pointer-events-none md:flex md:visible md:pointer-events-auto gap-5 mt-7">
        {numberOfImgs.map((idx) => (
          <PicThumb
            imgSrc={`image-product-${idx}-thumbnail.jpg`}
            num={idx}
            setCurImg={setCurImg}
            curImg={curImg}
            key={idx * 100}
          />
        ))}
      </div>
      {curImg < 4 && (
        <SwitchBtn
          imgSrc="icon-next.svg"
          position="right-5 md:right-0 md:translate-x-1/2"
          handleSwitch={handleNext}
          styleSwitchBtns={styleSwitchBtns}
        />
      )}
    </div>
  );
};

export default PicList;
