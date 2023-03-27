import react, { useState } from 'react';
import useLogin from '../../hooks/login';
import { useNavigate } from 'react-router';

export const Login = () => {
  const { login, loading, errors } = useLogin();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate= useNavigate()
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res =await login({ email, password });
      console.log(res);
      if(res.success===true){
        navigate("/")
      }
    } catch (e) {
      console.error(e);
    }
  };

  if (loading) {
    return <h1>Loading....</h1>;
  }




  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" name='email' id='email' onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" name='password' id='password' onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">Log In</button>
    </form>
  );
};
