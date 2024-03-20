// import  { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function Register() {
//   const [formData, setFormData] = useState({
//     username: '',
//     firstname: '',
//     lastname: '',
//     email: '',
//     password: ''
//   });
//   const navigate = useNavigate();

//   async function handleSubmit(e) {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:8000/api/users/register', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData)
//       });
//       if (response.ok) {
//         navigate('/login');
//       } else {
//         const data = await response.json();
//         console.log(data);
//       }
//     } catch (err) {
//       console.error('Error submitting form:', err);
//     }
//   }

//   function handleChange(e) {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   }

//   return (
//     <section>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <span>username:</span>
//           <input
//             type="text"
//             name="username"
//             value={formData.username}
//             onChange={handleChange}
//             placeholder="username..."
//           />
//         </div>
//         <div>
//           <span>first name:</span>
//           <input
//             type="text"
//             name="firstname"
//             value={formData.firstname}
//             onChange={handleChange}
//             placeholder="firstname..."
//           />
//         </div>
//         <div>
//           <span>Lastname:</span>
//           <input
//             type="text"
//             name="lastname"
//             value={formData.lastname}
//             onChange={handleChange}
//             placeholder="lastname..."
//           />
//         </div>
//         <div>
//           <span>email:</span>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             placeholder="your email..."
//           />
//         </div>
//         <div>
//           <span>Password:</span>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             placeholder="password..."
//           />
//         </div>
//         <button type="submit">Register</button>
//       </form>
//     </section>
//   );
// }

// export default Register;
