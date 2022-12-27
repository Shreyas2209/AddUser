import UserForm from "./Components/UserForm";
import { useState } from "react";
import UserList from "./Components/UserList";

function App() {
  const [users, setUsers] = useState([]);

  const onUserUpdate = (newUser) => {
    setUsers((prevUser) => [newUser, ...prevUser]);
  };

  return (
    <div>
      <UserForm onUserUpdate={onUserUpdate}></UserForm>
      <UserList users={users}></UserList>
    </div>
  );
}

export default App;
