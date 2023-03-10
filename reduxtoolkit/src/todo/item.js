import { useDispatch } from "react-redux"
import { deleteTodo } from "../store/todo"
import { openModal } from "../store/modal"

export default function TodoItem({ todo }) {

    const dispacth = useDispatch()
    const deleteHandle = () => {
        dispacth(deleteTodo(todo.id))
    }

    const editHandle = () => {
        dispacth(openModal({
            name: "edit-todo",
            data: todo
        }))
    }

    return (
        <li>
            <span style={{textDecoration: todo.done ? 'line-through' : false}}>
                {todo.title} - {todo.id}
            </span>
            <button onClick={editHandle}>Düzenle</button>
            <button onClick={deleteHandle}>Sil</button>
        </li>
    )
}