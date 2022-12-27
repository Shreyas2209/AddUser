import { useState } from "react";
import ErrorModal from "./ErrorModal";

const UserForm = (props) => {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState("");

  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (userName.trim().length === 0 && userAge.trim().length === 0) {
      setError({
        isError: true,
        title: "An error occured",
        message: "No value entered in username and userage.",
      });
      return;
    } else if (userName.trim().length === 0) {
      setError({
        isError: true,
        title: "An error occured",
        message: "No value entered in username.",
      });
      return;
    } else if (userAge.trim().length === 0) {
      setError({
        isError: true,
        title: "An error occured",
        message: "No value entered in userage.",
      });
      return;
    }
    props.onUserUpdate({ id: Math.random() * 10000000, userName, userAge });
  };

  const userNameHandler = (e) => {
    setUserName(e.target.value);
  };

  const userAgeHandler = (e) => {
    setUserAge(e.target.value);
  };

  const errorHandler = () => {
    setError({ isError: false });
  };

  return (
    <div>
      {error.isError && (
        <ErrorModal error={error} errorHandler={errorHandler}></ErrorModal>
      )}
      <form onSubmit={formSubmitHandler}>
        <input
          type="text"
          placeholder="Enter Name"
          onChange={userNameHandler}
        ></input>
        <input
          type="number"
          placeholder="Enter Age"
          onChange={userAgeHandler}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default UserForm;
