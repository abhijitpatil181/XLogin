import { useState } from "react";
import "./Form.css";

const Form = ({ setIsSubmitted }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (username === "user" && password === "password") {
      setError("");
      setIsSubmitted(true);
    } else {
      setError("Invalid username or password");
      setIsSubmitted(false);
    }
  };

  return (
    <>
      {error && <p>{error}</p>}
      <form onSubmit={onSubmitHandler}>
        <div className="form-input">
          <label htmlFor="username">Username : </label>
          <input
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <label htmlFor="password">Password : </label>
          <input
            type="text"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-input">
          <button type="submit">submit</button>
        </div>
      </form>
    </>
  );
};

export default Form;
