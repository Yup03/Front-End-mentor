import { useState } from "react"
import { ThemeProvider } from "next-themes"

import Header from "./Header"
import Form from "./Form"
import TodoList from "./TodoList"
import Stats from "./Stats"
import Filter from "./Filter"

const App = () => {
  const [todoArr, setTodoArr] = useState([])
  const [todoTerm, setTodoTerm] = useState("")
  const [filter, setFilter] = useState("all")

  const handleInsert = e => {
    e.preventDefault()
    if (!todoTerm) return
    setTodoArr(todoArr => [
      ...todoArr,
      { label: todoTerm, id: Date.now(), completed: false },
    ])

    setTodoTerm("")
  }

  const handleToggle = id => {
    setTodoArr(todoArr =>
      todoArr.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  const handleDelete = id => {
    setTodoArr(todoArr => todoArr.filter(todo => todo.id !== id))
  }

  const handleClearCompleted = () => {
    setTodoArr(todoArr => todoArr.filter(todo => todo.completed === false))
  }

  const remaining = todoArr.filter(todo => todo.completed === false).length

  let filteredArr

  if (filter === "all") filteredArr = todoArr
  if (filter === "active")
    filteredArr = todoArr.filter(todo => todo.completed === false)
  if (filter === "completed")
    filteredArr = todoArr.filter(todo => todo.completed === true)

  return (
    <ThemeProvider attribute="class">
      <div className="px-7 max-w-xl mx-auto ">
        <Header />
        <Form
          setTodoTerm={setTodoTerm}
          todoTerm={todoTerm}
          handleInsert={handleInsert}
        />
        <div className="rounded-lg overflow-hidden mb-10">
          <TodoList
            filteredArr={filteredArr}
            todoArr={todoArr}
            setTodoArr={setTodoArr}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
          <div className="relative">
            <Stats
              remaining={remaining}
              handleClearCompleted={handleClearCompleted}
            />
            <Filter setFilter={setFilter} filter={filter} />
          </div>
        </div>
        {filteredArr.length > 0 && (
          <p className="text-center text-Dark-grayish-blue-light dark:text-Dark-grayish-blue-dark font-bold">
            Drag and drop to reorder list
          </p>
        )}
      </div>
    </ThemeProvider>
  )
}

export default App
