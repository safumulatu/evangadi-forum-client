import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/api/users/login', formData);
      const data = response.data;
      localStorage.setItem('token', data.token);
      console.log(data);
      navigate('/');
    } catch (err) {
      console.error('Error submitting form:', err);
      if (err.response) {
        const errorData = err.response.data;
        toast.error(errorData.message);
      } else {
        toast.error('An error occurred. Please try again later.');
      }
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  return (
    <section className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your email..."
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Password..."
          />
        </div>
        <button type="submit" className="btn">Login</button>
      </form>
    </section>
  );
}

export default Login;
