import { useState } from "react";

function TodoList() {
  const [list, setList] = useState([]);
  const [todo, setTodo] = useState("");

  function handleChange(e) {
    setTodo(e.target.value);
  }

  function handleAddTodo() {
    if (todo.trim() !== "") {
      setList([...list, { id: Date.now(), text: todo }]);
      setTodo("");
    }
  }

  function handleRemoveTodo(id) {
    setList(list.filter((item) => item.id !== id));
  }

  return (
    <div className="flex justify-center items-center w-screen h-screen bg-purple-100">
      <div className="flex flex-col items-center w-96 min-h-[500px] h-auto bg-white border-3 border-gray-950 rounded-lg">
        <div className="flex flex-row w-full h-16 bg-red-400 justify-around items-center p-5 rounded-md border-b-3 border-gray-950">
          <input
            className="w-60 h-10 border-3 border-gray-950 px-2"
            type="text"
            value={todo}
            onChange={handleChange}
            placeholder="Digite uma tarefa"
          />
          <button
            className="w-20 h-10 border-3 border-gray-950 bg-white hover:bg-gray-100"
            onClick={handleAddTodo}
          >
            Add
          </button>
        </div>
        <div className="w-full p-4">
          {list.length === 0 ? (
            <p className="text-center text-gray-500 mt-10">
              Nenhuma tarefa adicionada
            </p>
          ) : (
            <ul className="space-y-2">
              {list.map((item) => (
                <li
                  key={item.id}
                  className="flex justify-between items-center p-3 border-2 border-gray-200 rounded"
                >
                  <span>{item.text}</span>
                  <button
                    onClick={() => handleRemoveTodo(item.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remover
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoList;
