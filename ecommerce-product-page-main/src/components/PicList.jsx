import { useState } from "react"
import Pic from "./Pic"
import PicThumb from "./PicThumb"
import SwitchBtn from "./SwitchBtn"

const PicList = ({ handleModal, styleSwitchBtns }) => {
  const [curImg, setCurImg] = useState(1)

  const handleNext = () => {
    setCurImg(c => c + 1)
  }
  const handlePrevious = () => {
    setCurImg(c => c - 1)
  }

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
        <Pic
          imgSrc="image-product-1.jpg"
          curImg={curImg}
          setCurImg={setCurImg}
          handleModal={handleModal}
          styleSwitchBtns={styleSwitchBtns}
          num={1}
        />
        <Pic
          imgSrc="image-product-2.jpg"
          curImg={curImg}
          setCurImg={setCurImg}
          handleModal={handleModal}
          styleSwitchBtns={styleSwitchBtns}
          num={2}
        />
        <Pic
          imgSrc="image-product-3.jpg"
          curImg={curImg}
          setCurImg={setCurImg}
          handleModal={handleModal}
          styleSwitchBtns={styleSwitchBtns}
          num={3}
        />
        <Pic
          imgSrc="image-product-4.jpg"
          curImg={curImg}
          setCurImg={setCurImg}
          handleModal={handleModal}
          styleSwitchBtns={styleSwitchBtns}
          num={4}
        />
      </div>

      <div className="hidden invisible pointer-events-none md:flex md:visible md:pointer-events-auto gap-5 mt-7">
        <PicThumb
          imgSrc="image-product-1-thumbnail.jpg"
          num={1}
          setCurImg={setCurImg}
          curImg={curImg}
        />
        <PicThumb
          imgSrc="image-product-2-thumbnail.jpg"
          num={2}
          setCurImg={setCurImg}
          curImg={curImg}
        />
        <PicThumb
          imgSrc="image-product-3-thumbnail.jpg"
          num={3}
          setCurImg={setCurImg}
          curImg={curImg}
        />
        <PicThumb
          imgSrc="image-product-4-thumbnail.jpg"
          num={4}
          setCurImg={setCurImg}
          curImg={curImg}
        />
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
  )
}

export default PicList
