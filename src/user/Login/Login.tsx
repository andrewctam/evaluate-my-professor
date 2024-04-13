import { useContext, useState } from "react";
import "./Login.scss";
import { DispatchContext, UserContext } from "../../App";
import { UserActionType } from "../../types";
import { names, uniqueNamesGenerator } from "unique-names-generator";

export default function Login() {
  const userState = useContext(UserContext);
  const dispatch = useContext(DispatchContext);

  const [nameInput, setNameInput] = useState("");

  const switchUser = (name: string) => {
    dispatch({
      type: UserActionType.SWITCH,
      payload: { name },
    });
  };

  const addUser = () => {
    const name =
      nameInput.length > 0
        ? nameInput
        : uniqueNamesGenerator({ dictionaries: [names] });

    dispatch({
      type: UserActionType.ADD,
      payload: { name },
    });

    setNameInput("");
  };

  const loggedIn = userState.currentUser;

  return (
    <div className="login">
      <div>
        <input
          className="userInput"
          placeholder="Enter a username..."
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />

        <button onClick={addUser}>Add User</button>
      </div>

      <div>
        {loggedIn ? `Logged in as ${loggedIn.name}` : "No user logged in"}
      </div>
      <div>Click on a user to login as them:</div>
      <div className="userList">
        {userState.users.map((user) => (
          <div key={user.name}>
            <button onClick={() => switchUser(user.name)}>{user.name}</button>
          </div>
        ))}
      </div>
    </div>
  );
}