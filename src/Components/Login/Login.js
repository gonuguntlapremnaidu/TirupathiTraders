import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Login() {
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = event.target.tbemail.value;
    const password = event.target.tbpassword.value;

    try {
      const res = await axios.post('http://localhost:8080/api/users/login', { email, password });
      console.log(res.data);
      navigate("/home");
    } catch (err) {
      console.error(err);
      // Handle error (e.g., show error message to the user)
    }
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
                  name="tbemail"
                  placeholder="Enter Your Email"
                  required
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
                  name="tbpassword"
                  placeholder="Enter Your password"
                  required
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
