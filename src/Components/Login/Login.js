import React from "react";
import { Link, useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/home");
  };

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
      <h1 style={{ color: "blue" }}>Login Page</h1>
      <form onSubmit={handleSubmit}>
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
                <input type="submit" value="Login" />
                <Link to="/register">
                  <input type="button" value="Register" />
                </Link>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default Login;
