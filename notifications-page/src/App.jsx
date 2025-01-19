import { useState } from "react"
import CommentList from "./components/CommentList"
import Header from "./components/Header"

const arr = [
  {
    userName: "Mark Webber",
    userProfile: "./avatar-mark-webber.webp",
    action: "reacted to your recent post",
    reactedOn: "My first tournament today!",
    time: "1m ago",
    read: false,
  },
  {
    userName: "Angela Gray",
    userProfile: "./avatar-angela-gray.webp",
    action: "followed you",
    content: "My first tournament today!",
    time: "5m ago",
    read: false,
  },
  {
    userName: "Jacob Thompson",
    userProfile: "./avatar-jacob-thompson.webp",
    action: "has joined your group",
    groupName: "Chess Club",
    time: "1 day ago",
    read: false,
  },
  {
    userName: "Rizky Hasanuddin",
    userProfile: "./avatar-rizky-hasanuddin.webp",
    action: "sent you a private message",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    time: "5 days ago",
    read: true,
  },
  {
    userName: "Kimberly Smith",
    userProfile: "./avatar-kimberly-smith.webp",
    action: "commented on your picture",
    commentedOn: "./image-chess.webp",
    time: "1 week ago",
    read: true,
  },
  {
    userName: "Nathan Peterson",
    userProfile: "./avatar-nathan-peterson.webp",
    action: "reacted to your recent post",
    reactedOn: "5 end-game strategies to increase your win rate",
    time: "2 weeks ago",
    read: true,
  },
  {
    userName: "Anna Kim",
    userProfile: "./avatar-anna-kim.webp",
    action: "left the group",
    groupName: "Chess Club",
    time: "2 weeks ago",
    read: true,
  },
]

function App() {
  const [commentsArr, setCommentsArr] = useState(arr)
  const nonReadCount = commentsArr.filter(com => !com.read).length
  const updateArr = () =>
    setCommentsArr(curArr =>
      curArr.map(com => ({
        ...com,
        read: true,
      }))
    )

  return (
    <div className="max-w-[73rem] bg-white mx-auto sm:mt-[6.2rem] px-[1.5rem] sm:px-[3.1rem] shadow-xl rounded-3xl mb-10 md:mb-24 pb-6">
      <Header nonReadCount={nonReadCount} updateArr={updateArr} />
      <CommentList commentsArr={commentsArr} />
    </div>
  )
}

export default App
