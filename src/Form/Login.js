import React, { useState } from "react";
import "../Form/Login.css";
import video from "../Media/Pexels Videos 4552.mp4";
function Login(props) {
  let [value, setValue] = useState({
    username: "",
    password: "",
  });

  let [err, seterr] = useState(false);
  let [errtxt, seterrtxt] = useState("");

  let handleInputChange = (e) => {
    // setValue("asjdhjakls");
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };

  let handleSubmit = (e) => {
    e.preventDefault();

    if (!value.username || !value.password) {
      seterr(true);
      seterrtxt("Please enter all the fields");
    } else if (value.username.length < 2) {
      seterr(true);
      seterrtxt("Name is too short");
    } else if (value.password.length < 4) {
      seterr(true);
      seterrtxt("Password is too short");
    } else {
      seterr(false);
      localStorage.setItem("user", JSON.stringify(value));
      props.changeUserData(value);
    }
  };

  return (
    <>
      <section className="login-section">
        <div className="form-container">
          {/* <video src={video} autoPlay loop muted style={{ zIndex: -10 }} /> */}
          <h1>Omii Music</h1>
          <form>
            <div className="control">
              <label htmlFor="name">User Name</label>
              <input
                type="text"
                name="username"
                id="name"
                value={value.username}
                required
                onChange={handleInputChange}
                placeholder="You Can type anything"
              />
            </div>
            <div className="control">
              <label htmlFor="psw">Password</label>
              <input
                type="password"
                name="password"
                id="psw"
                required
                value={value.password}
                onChange={handleInputChange}
                placeholder="authentication is not done yet !"
              />
            </div>
            <button
              onClick={handleSubmit}
              type="submit"
              value="Submit"
              className="Login-button"
            >
              Login
            </button>
            {err ? <div className="err">{errtxt}</div> : null}
          </form>
          {/* <div className="link">
            <small>Create New Account</small>
          </div> */}
        </div>
      </section>
    </>
  );
}

export default Login;
