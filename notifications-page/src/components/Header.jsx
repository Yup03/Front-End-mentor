const Header = ({ nonReadCount, updateArr }) => {
  return (
    <div className="flex gap-3  py-[3.3rem] justify-between items-center">
      <div className="space-x-4 inline-flex font-extrabold items-center">
        <h1 className="text-[2.4rem]">Notifications</h1>
        {Boolean(nonReadCount) && (
          <span className="w-[3.2rem] h-[2.5rem] bg-primary rounded-md inline-flex justify-center items-center text-white">
            {nonReadCount}
          </span>
        )}
      </div>
      <button
        className="text-dark_grayish_blue hover:text-primary transition-colors"
        onClick={updateArr}
      >
        Mark all as read
      </button>
    </div>
  )
}

export default Header
