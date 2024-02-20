import "/src/ui/sass/app.scss";
import { useState, useEffect } from "react";

const Register = () => {
  return (
    <div className="register">
      <h1>Create an account</h1>
      <h2>Register to access all features</h2>
      <form>
        <label>
          <span>Name:</span>
          <input
            type="text"
            name="displayname"
            required
            placeholder="name user"
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="displayemail"
            required
            placeholder="e-mail"
          />
        </label>
        <label>
          <span>Password:</span>
          <input
            type="password"
            name="displaypassword"
            required
            placeholder="Enter password"
          />
        </label>
        <label>
          <span>Confirm password:</span>
          <input
            type="confirmpassword"
            name="displaypassword"
            required
            placeholder="Confirm password"
          />
        </label>
        <button className="btn">Register</button>
      </form>
    </div>
  );
};

export default Register;
