import { useState } from "react"
import AddTask from "./components/AddTask"
import Tasks from "./components/Tasks"

function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Estudar programação",
      description: "Estudar programação para se tornar dev full stack.",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Praticar exercícios",
      description: "Fazer exercícios físicos para manter a saúde.",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Ler um livro",
      description: "Ler pelo menos 20 páginas de um livro.",
      isCompleted: false,
    }
  ]);
  return (
    <div className="w-screen h-screen bg-slate-500 flex justify-center p-6">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 font-bold text-center">Gerenciador de Tarefas</h1>
        <AddTask />
        <Tasks tasks={tasks} />
      </div>
    </div >
  )
}

export default App