import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import 'react-toastify/dist/ReactToastify.css';
import './login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    if (isSubmitting) return;

    setIsSubmitting(true);
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
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="container-9nr py-mco d-md-pc4 content-7h7 container-rne">
        <div className="main-kdz col-kvs col-6gi me-md-es8 p-6kd d-q61 column-qg8 content-tez">
          <p className="oaexx">
            Login to your account
          </p>
          <p className="fiefw text-wy9 ">
            Don't have an account?
            <Link className="gpkoo" to="/register">
              Create a new account
            </Link>
          </p>
          <form onSubmit={handleSubmit}>
            <input
              className="input-vxt"
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              id="ema-ory"
            />

            <div style={{ position: 'relative' }}>
              <input
                className="input-vxt"
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Your Password"
                value={formData.password}
                onChange={handleChange}
                id="pas-o1t"
              />
              <button
                type="button"
                style={{ position: 'absolute', top: '30%', right: '10px', transform: 'translateY(-50%)' }}
                onClick={togglePasswordVisibility}
              >
                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
              </button>
            </div>

            <button type='submit' className="btn-m9c" disabled={isSubmitting}>
              {isSubmitting ? 'Logging in...' : 'Login'}
            </button>
          </form>
          <Link className="gpkoo" to="/register">
            Create an account?
          </Link>
        </div>
        <div className="sid-dkq container-9nr col-kvs col-6gi ms-md-tpe mt-sm-jw4 color-black">
          <p className="for-oei">
            About
          </p>
          <h1>
            Evangadi Networks Q&amp;A
          </h1>
          <p>
            No matter what stage of life you are in, whether you’re just starting elementary school or being promoted to CEO of a Fortune 500 company, you have much to offer to those who are trying to follow in your footsteps.!
          </p>
          <p>
            Whether you are willing to share your knowledge or you are just looking to meet mentors of your own, please start by joining the network here.
          </p>
          <button className="btn-m9c">
            HOW IT WORKS
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
