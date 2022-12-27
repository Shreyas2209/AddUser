function UserList(props) {
  const userJSX = props.users.map((user) => (
    <li key={user.id}>
      {user.userName}({user.userAge})
    </li>
  ));

  return <ul>{userJSX}</ul>;
}

export default UserList;
