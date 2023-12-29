import { useEffect, useState } from "react"
import { DndContext, closestCenter } from "@dnd-kit/core"
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable"

import TodoItem from "./TodoItem"

const TodoList = ({ filteredArr, handleToggle, handleDelete }) => {
  const [sortedArr, setSortedArr] = useState([])

  useEffect(() => {
    setSortedArr([...filteredArr])
  }, [handleToggle, handleDelete, filteredArr])

  const onDragEnd = evt => {
    const { active, over } = evt
    if (active.id === over.id) return

    setSortedArr(arr => {
      const oldIndex = arr.findIndex(todo => todo.id === active.id)
      const newIndex = arr.findIndex(todo => todo.id === over.id)

      // console.log([...arrayMove(arr, oldIndex, newIndex)])

      return arrayMove(arr, oldIndex, newIndex)
    })
  }

  return (
    <ul>
      <DndContext collisionDetection={closestCenter} onDragEnd={onDragEnd}>
        <SortableContext
          items={sortedArr}
          strategy={verticalListSortingStrategy}
        >
          {sortedArr?.map(todo => (
            <TodoItem
              todo={todo}
              key={todo.id}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
            />
          ))}
        </SortableContext>
      </DndContext>
    </ul>
  )
}

export default TodoList
