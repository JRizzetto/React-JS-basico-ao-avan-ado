import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Matheus", "Pedro", "Josias"]);

  const [users, setUsers] = useState([
    {id: 1, nome: "Jefferson", idade: 36},
    {id: 2, nome: "Pedro", idade: 30},
    {id: 3, nome: "Rafael", idade: 40},
  ]);

  const deleteRandom = () => {
    
    const randomNumber = Math.floor(Math.random() * 4);

    setUsers((prevUsers) => 
        prevUsers.filter((user) => randomNumber !== user.id)
    );
  };

  return <div>
    { /* 5 - Render sem key */}
    <ul>
        {list.map(((item, i) => (
            <li key={i}>{item}</li>
        )))}
    </ul>
    { /* 5 - Render com key */}
    <ul>
        {users.map((user) => (
            <li key={user.id}>{ user.nome } - { user.idade} anos</li>
        ))}
    </ul>
    {/* 6 - Previous state */}
    <button onClick={deleteRandom}>Delete Random</button>
  </div>;
};

export default ListRender;
