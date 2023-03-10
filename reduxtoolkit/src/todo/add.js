import { useState } from "react";
import { nanoid } from "@reduxjs/toolkit";
import { addTodo } from "../store/todo";
import { useDispatch } from "react-redux";

export default function AddTodo({ user }) {
    const dispacth = useDispatch()

    const [todo, setTodo] = useState('')
    const submitHandle = e => {
        e.preventDefault()
        dispacth(addTodo({
            title: todo,
            done: false,
            id: nanoid(),
            user: 1
        }))
        setTodo('')
    }

    return (
        <form onSubmit={submitHandle}>
            <input type="text"  value={todo} onChange={e => setTodo(e.target.value)} placeholder="Todo Giriniz" />
            <button disabled={!todo} type="submit">Ekle</button>
        </form>
    )
}