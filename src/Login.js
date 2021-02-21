import React, { useCallback, useContext } from "react";
import { withRouter, Redirect } from "react-router";
import app from "./base.js";
import { AuthContext } from "./Auth.js";

const Login = ({ history }) => {
  const handleLogin = useCallback(
    async (event) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
        history.push("/");
      } catch (error) {
        alert(error);
      }
    },
    [history]
  );

  const { currentUser } = useContext(AuthContext);

  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <div class="login-page">
        <div class="form " onSubmit={handleLogin}>
          <div class="login">
            <div class="login-header">
              <h3>LOGIN</h3>
            </div>
          </div>
          <form class="login-form">
            <input name="email" type="text" placeholder="username" />
            <input name="password" type="password" placeholder="password" />
            <button>login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Login);
