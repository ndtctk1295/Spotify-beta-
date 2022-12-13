import { useState } from "react";
import "./style.css";
import { useNavigate } from "react-router-dom";
function SignUp() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    passwordConfirm: "",
  });
  const navigate = useNavigate();
  const handleNameChange = (e) => {
    e.preventDefault();
    setUser({ ...user, name: e.target.value });
  };

  const handleUsernameChange = (e) => {
    e.preventDefault();
    setUser({ ...user, username: e.target.value });
  };

  const handlePasswordChange = (e) => {
    e.preventDefault();
    setUser({ ...user, password: e.target.value });
  };

  const handleConfirmPasswordChange = (e) => {
    e.preventDefault();
    setUser({ ...user, passwordConfirm: e.target.value });
  };

  const handleSubmitForm = (e) => {
    e.preventDefault();
    const newUser = { ...user };
    fetch("https://638a12bf4eccb986e8a310ad.mockapi.io/users", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        name: user.name,
        username: user.username,
        password: user.password,
      }),
    });
    navigate("/login");
  };
  return (
    <div className="form" style={{ display: "flex" }}>
      <h1 style={{ margin: 0, marginBottom: 30 }}>Sign up for free</h1>
      <form onSubmit={handleSubmitForm}>
        <div>
          <label>What should we call you?</label>
          <br />
          <input
            type="text"
            name="name"
            onChange={handleNameChange}
            className="name"
          />
        </div>
        <div>
          <label>Create your username</label>
          <br />
          <input
            type="text"
            name="username"
            onChange={handleUsernameChange}
            className="username"
          />
        </div>
        <div>
          <label>Create your password</label>
          <br />
          <input
            type="password"
            name="password"
            onChange={handlePasswordChange}
            className="password"
          />
        </div>
        <div>
          <label>Confirm your password</label>
          <br />
          <input
            type="password"
            name="passwordConfirm"
            onChange={handleConfirmPasswordChange}
            className="passwordConfirm"
          />
          {user.password !== user.passwordConfirm ? (
            <div>{"Different password"}</div>
          ) : (
            <></>
          )}
        </div>
        <div>
          <input
            type="submit"
            className="signup-button"
            onClick={handleSubmitForm}
          />
        </div>
      </form>
    </div>
  );
}

export default SignUp;
