import Comment from "./Comment"

const CommentList = ({ commentsArr }) => {
  return (
    <ul className="space-y-[1rem]">
      {commentsArr.map((com, idx) => (
        <Comment key={idx} comment={com} />
      ))}
    </ul>
  )
}

export default CommentList
