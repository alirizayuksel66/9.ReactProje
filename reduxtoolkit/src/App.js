import { useState } from 'react';
import Header from './todo/header';
import AddTodo from './todo/add';
import TodoList from './todo/list'
import Modal from './todo/modal'
import { useSelector } from 'react-redux';

function App() {

  const { open: isModalOpen } = useSelector(state => state.modal)
  const [user, setUser] = useState(false);
  const [language, setLanguage] = useState("tr"); // Todo
  const [dark, setDark] = useState();

  return (
    <main>
      {isModalOpen && <Modal />}
      <Header user={user} setUser={setUser} />
      <AddTodo />
      <TodoList />
    </main>
  );
}

export default App;
