import TodoItem from "./item";
import { useSelector } from "react-redux";

export default function TodoList({ setModal }) {

    const { todos } = useSelector(state => state.todo)

    return (
        <ul>
            {todos.map((todo, key) => <TodoItem key={key} setModal={setModal} todo={todo} />)}
        </ul>
    )
}