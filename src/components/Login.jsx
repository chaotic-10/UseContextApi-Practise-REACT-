import React, { useState, useContext } from 'react';
import UserContext from '../context/UserContext';

const Login = () => {
  const [userName, setUsername] = useState(null); // Corrected useState import and case
  const [password, setPassword] = useState(null);

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ userName, password }); // Corrected case for userName
  };

  return (
    <div>
      <h1>Login:</h1>
      <input
        type="text"
        value={userName} // Use the correct state variable name
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)} // Corrected case for setUsername
      />

      <input
        type="password" // Use type="password" for password inputs
        value={password}
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleSubmit}>SUBMIT</button>
    </div>
  );
};

export default Login;
