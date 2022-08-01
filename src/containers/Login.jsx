import React from "react";
import "@styles/login.scss";

const Login = () => {

  return (
    <div className="login">
      <div className="form-container">
        <img src="@logos/logo_yard_sale.svg" alt="logo" className="logo" />
        <h1 className="title"> Create a new password </h1>
        <p className="subtitle"> Enter a new password for your account </p>
        <form action="/" className="form">
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            className="input input-password"
            id="password"
            placeholder="********"
          />
          <label htmlFor="new-password" className="label">
            Re-enter Password
          </label>
          <input
            type="password"
            className="input input-password"
            id="new-password"
            placeholder="********"
          />
          <input
            type="submit"
            className="primery-button login-button"
            defaultValue="Confirm"
          />
        </form>
      </div>
    </div>
  );
};

export default Login;
