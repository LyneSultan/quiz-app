import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonComponent } from '../../base/Button/Button.jsx';
import { routes } from '../../routes/routes.js';
import Input from './../../base/Input/Input.jsx';
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUsernameChange = (e) => setUsername(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleLogin = () => {
    axios.post("http://localhost:8080/users/login",
      {
        username,
        password
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => {
        console.log(response);
        localStorage.setItem("token", response.data.token);

        navigate(routes.quizzes);
      })
      .catch(error => {
        console.error("Login error: ", error);
      });
  };


  const handleRegister = () => {
    axios.post("http://localhost:8080/users/register",
      {
        username,
        password
      },
      {
        headers: {
          "Content-Type": "application/json"
        }
      }
    )
      .then(response => {
        console.log(response);
        localStorage.setItem("token", response.data.token);
        navigate(routes.quizzes);
      })
      .catch(error => {
        console.error("Login error: ", error);
      });
  };


  return (
    <div className="flex column align-center justify-center">
      <div>
        <Input
          placeholder="Enter your name"
          handleInput={handleUsernameChange}
        />
      </div>
      <div>
        <Input
          placeholder="Enter your password"
          handleInput={handlePasswordChange}
          type="password"
        />
      </div>
      <ButtonComponent
        onClick={handleLogin}
        text="Login"
      />
      <ButtonComponent
        onClick={handleRegister}
        text="Register"
      />
    </div>
  );
};

export default Login;
