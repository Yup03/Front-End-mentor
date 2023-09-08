import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"

const TodoItem = ({ todo, handleToggle, handleDelete }) => {
  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: todo.id })
  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  }

  return (
    <li ref={setNodeRef} style={style} {...attributes}>
      <div className="flex items-center gap-3 bg-very-light-gray dark:bg-very-dark-desaturated-blue px-5">
        <label className="contain">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggle(todo.id)}
          />
          <span className="checkmark z-10"></span>
          <div className="w-[26px] h-[26px] absolute left-0 top-[40%] -translate-y-1/2 rounded-full bg-gradient-to-br from-[#57ddff] to-[#c058f3]"></div>
        </label>
        <p
          className={`flex-1 h-[56px] flex items-center ${
            todo.completed
              ? "line-through text-light-grayish-blue-light dark:text-very-dark-grayish-blue-alt"
              : ""
          }`}
          {...listeners}
        >
          {todo.label}
        </p>
        <button className="ml-auto" onClick={() => handleDelete(todo.id)}>
          <img src="./src/assets/images/icon-cross.svg" alt="icon-cross" />
        </button>
      </div>
      <hr className="text-light-grayish-blue-light dark:text-very-dark-grayish-blue-dark" />
    </li>
  )
}

export default TodoItem
