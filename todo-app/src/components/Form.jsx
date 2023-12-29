const Form = ({ setTodoTerm, todoTerm, handleInsert }) => {
  return (
    <form onSubmit={handleInsert} className="mb-5">
      <label className="block w-full bg-very-light-gray dark:bg-very-dark-desaturated-blue flex items-center gap-5 py-3 px-5 rounded-lg">
        <span className="w-6 h-6 border-2 border-very-light-grayish-blue dark:border-very-dark-grayish-blue-dark rounded-full"></span>
        <input
          type="text"
          className="inline-block focus:outline-none bg-transparent flex-1"
          placeholder="Create a new todo"
          value={todoTerm}
          onChange={e => setTodoTerm(e.target.value)}
          maxLength={40}
        />
      </label>
    </form>
  )
}

export default Form
