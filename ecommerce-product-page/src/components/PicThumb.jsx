const PicThumb = ({ imgSrc, num, setCurImg, curImg }) => {
  const handleClick = () => setCurImg(num)
  return (
    <button
      className={`rounded-xl overflow-hidden hover:opacity-50 transition dura ${
        curImg === num ? "border-2 border-orange opacity-50" : ""
      }`}
      onClick={handleClick}
    >
      <img src={imgSrc} alt="image product" />
    </button>
  )
}

export default PicThumb
