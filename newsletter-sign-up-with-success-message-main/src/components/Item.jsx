const Item = ({ children }) => {
  return (
    <li className="flex items-center gap-4">
      <img src="icon-list.svg" alt="icon-list" />
      {children}
    </li>
  )
}

export default Item
