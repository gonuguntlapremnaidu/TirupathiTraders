  import React from "react";
  import { Link } from "react-router-dom";

  function Register() {
    return (
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.8)",
          padding: "20px",
          borderRadius: "10px",
          marginTop: "50px",
          maxWidth: "400px",
          margin: "auto",
        }}
      >
        <h1>Register Page</h1>
        <form>
          <table>
            <tbody>
              <tr>
                <td>
                  <label htmlFor="tbusername">Username:</label>
                </td>
                <td>
                  <input
                    type="text"
                    id="tbusername"
                    placeholder="Enter Your Name"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="tbemail">Email:</label>
                </td>
                <td>
                  <input
                    type="email"
                    id="tbemail"
                    placeholder="Enter Your Email"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label htmlFor="tbpassword">Password:</label>
                </td>
                <td>
                  <input
                    type="password"
                    id="tbpassword"
                    placeholder="Enter Your password"
                  />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <input type="submit" value="Register" />
                  <Link to="/login">
                    <input type="button" value="Back to Login" />
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </div>
    );
  }

  export default Register;
