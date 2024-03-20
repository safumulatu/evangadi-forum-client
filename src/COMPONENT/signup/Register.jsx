import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as yup from 'yup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import 'react-toastify/dist/ReactToastify.css';
import './Register.css';

function Register() {
  const [formData, setFormData] = useState({
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const schema = yup.object().shape({
    username: yup.string().required('Username is required'),
    firstname: yup.string().required('First name is required'),
    lastname: yup.string().required('Last name is required'),
    email: yup.string().email('Invalid email').required('Email is required'),
    password: yup.string()
      .required('Password is required')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        'Password must contain at least 8 characters, including one uppercase letter, one lowercase letter, one number, and one special character'
      )
  });

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await schema.validate(formData, { abortEarly: false });
      const response = await fetch('http://localhost:8000/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        toast.success('Registration successful. Please log in.');
        navigate('/login');
      } else {
        const data = await response.json();
        toast.error(data.message || 'An error occurred. Please try again.');
      }
    } catch (err) {
      if (err instanceof yup.ValidationError) {
        const newErrors = {};
        err.inner.forEach(error => {
          newErrors[error.path] = error.message;
        });
        setErrors(newErrors);
      } else {
        console.error('Error submitting form:', err);
        toast.error('An error occurred. Please try again.');
      }
    }
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    // Validate field and update errors
    schema.validateAt(name, { [name]: value })
      .then(() => setErrors({...errors, [name]: null }))
      .catch(err => setErrors({...errors, [name]: err.errors[0] }));
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div>
      <div className="container-fer sig-2ob">
        <div className="container-hpk d-md-ksv mx-xfj py-3wg item-cps">
          <div className="wrapper-69n col-db2 col-ghb me-md-e7b p-tc9 d-lzn column-vdk">
            <p>Join the network</p>
            <p className="cgnfo">
              Already have an account? <Link className="mewcn" to="/login">Sign in</Link>
            </p>
            <form onSubmit={handleSubmit}>
            {errors.username && <span style={{ color: 'red' }}>{errors.username}</span>}
              <input
                className="in1-848"
                name="username"
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                style={{ border: errors.username ? '2px solid red' : '2px solid green' }}
              />
              <div className="{d-lzn}">
              {errors.firstname && <span style={{ color: 'red' }}>{errors.firstname}</span>}

                <input
                  className="in1-848 me-zsk"
                  name="firstname"
                  type="text"
                  placeholder="First Name"
                  value={formData.firstname}
                  onChange={handleChange}
              style={{ border: errors.firstname ? '2px solid red' : '2px solid green' }}


                />
                {errors.lastname && <span style={{ color: 'red' }}>{errors.lastname}</span>}
                <input
                  className="in1-848 ms-yz4"
                  name="lastname"
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastname}
                  onChange={handleChange}
                style={{ border: errors.lastname ? '2px solid red' : '2px solid green' }}
                />
              </div>
              {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
              <div style={{ position: 'relative' }}>
              <input
                className="in1-848"
                name="email"
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                style={{ border: errors.email ? '1px solid red' : '2px solid green' }}
              />
  {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}     
  <input
    className="in1-848"
    name="password"
    type={showPassword ? 'text' : 'password'}
    placeholder="Password"
    value={formData.password}
    onChange={handleChange}
    style={{ border: errors.password ? '1px solid red' : '2px solid green' }}
  />
  <button
    type="button"
    style={{ position: 'absolute', top: '20%', right: '10px', transform: 'translateY(-50%)' }}
    onClick={(e) => { e.preventDefault(); togglePasswordVisibility(); }}
  >
    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
  </button>
</div>
              <button type="submit" className="btn-zs9">
                Sign up
              </button>
            </form>
            <p className="mt-md-ify mt-sm-88v text-ixt text-mvy">
              I agree to the <a className="cayhj" href="/privacy-policy">privacy policy</a> and <a className="cayhj" href="/terms-of-service">terms of service.</a>
            </p>
            <Link className="cewmk text-ixt" to="/login">Already have an account?</Link>
          </div>
          <div className="Sig-pta container-hpk col-db2 col-ghb ms-md-9vt mt-sm-88v">
            <p className="for-e36 text-center">About</p>
            <h1 className='text-center'>Evangadi Networks Q&amp;A</h1>
            <p className="for-6gc" style={{ color: "black" }}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem voluptate officiis beatae nobis pariatur omnis facere accusamus laboriosam hic, adipisci vero reiciendis, recusandae sit ad, eum quisquam! Molestias, ut commodi!
            </p>
            <p className="for-6gc" style={{ color: "black" }}>
              No matter what stage of life you are in, whether you’re just starting elementary school or being promoted to CEO of a Fortune 500 company, you have much to offer to those who are trying to follow in your footsteps.!
            </p>
            <p className="for-6gc" style={{ color: "black" }}>
              Whether you are willing to share your knowledge or you are just looking to meet mentors of your own, please start by joining the network here.
            </p>
            <button className="text-center btn-5wb">HOW IT WORKS</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
