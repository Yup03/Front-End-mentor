const Comment = ({ comment }) => {
  const {
    userName,
    userProfile: ImgSrc,
    action,
    time,
    read,
    message,
    groupName,
    reactedOn,
    commentedOn,
  } = comment

  return (
    <li className={`py-[1.5rem] ${read || "bg-[#e6effa80] rounded-xl"}`}>
      <div
        className={` flex gap-[1.5rem] sm:gap-[2rem] px-[1.5rem] sm:px-[1.8rem] items-start`}
      >
        <img src={ImgSrc} alt={userName} className="w-[4.5rem]" />
        <div>
          <h3 className="space-x-3">
            <a
              href="#"
              className="font-extrabold hover:text-primary transition-colors"
            >
              {userName}
            </a>
            <span className="text-dark_grayish_blue">{action}</span>
            {groupName && (
              <a href="#" className="text-primary font-extrabold">
                {groupName}
              </a>
            )}
            {reactedOn && (
              <a
                href="#"
                className="font-extrabold text-dark_grayish_blue hover:text-primary transition-colors"
              >
                {reactedOn}
              </a>
            )}

            {read || (
              <span className="w-[.8rem] h-[.8rem] bg-accent rounded-full inline-block" />
            )}
          </h3>
          <span className="text-grayish_blue">{time}</span>
          {message && (
            <p className="border border-light_grayish_blue_1 rounded-xl px-[2rem] py-[1.8rem] mt-[1rem] text-dark_grayish_blue cursor-pointer hover:bg-light_grayish_blue_1">
              Hello, thanks for setting up the Chess Club. I've been a member
              for a few weeks now and I'm already having lots of fun and
              improving my game.
            </p>
          )}
        </div>
        {commentedOn && (
          <img
            src={commentedOn}
            alt="chess play"
            className="w-[4.5rem] h-[4.5rem] ml-auto cursor-pointer"
          />
        )}
      </div>
    </li>
  )
}

export default Comment
