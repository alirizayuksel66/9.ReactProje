import { useState } from 'react';
import Header from './todo/header';
import AddTodo from './todo/add';
import TodoList from './todo/list'
import Modal from './todo/modal'

function App() {

  const [user, setUser] = useState(false);
  const [language, setLanguage] = useState("tr"); // Todo
  const [dark, setDark] = useState();
  const [modal, setModal] = useState(false);
  const close = () => setModal(false)

  return (
    <main>
      {modal && <Modal close={close} name={modal.name} data={modal.data} />}
      <Header user={user} setUser={setUser} />;
      <AddTodo user={user}/>;
      <TodoList setModal={setModal} user={user}/>
    </main>
  );
}

export default App;
