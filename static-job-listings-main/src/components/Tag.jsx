const Tag = ({ label, bg }) => {
  return (
    <span
      className={`px-3 pt-2 pb-1 text-white rounded-full ml-3 text-sm ${bg}`}
    >
      {label}
    </span>
  )
}

export default Tag
