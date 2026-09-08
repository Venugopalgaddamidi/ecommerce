import { useState } from 'react';
import '../css/Signup.css';

const Signup = () => {
  const [username, setUsername] = useState('');
  const [rollno, setRollno] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const SubmitForm = (e) => {
    e.preventDefault();

    alert(
      `Username: ${username}, Roll No: ${rollno}, Email: ${email}, Password: ${password}`
    );
  };

  return (
    <form onSubmit={SubmitForm}>
      <h1>Signup Page</h1>

      <div>
        <span>Username: </span>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter your Username"
        />
      </div>

      <br />

      <div>
        <span>Roll No: </span>
        <input
          type="text"
          name="rollno"
          value={rollno}
          onChange={(e) => setRollno(e.target.value)}
          placeholder="Enter your Roll No"
        />
      </div>

      <br />

      <div>
        <span>Email: </span>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your Email"
        />
      </div>

      <br />

      <div>
        <span>Password: </span>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your Password"
        />
      </div>

      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default Signup;