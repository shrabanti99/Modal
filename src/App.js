// import React, { useState } from "react";
// import "./App.css"
// const User = ({ closeModal }) => {
//   // Function to validate email
//   const validateEmail = (email) => {
//     const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     return re.test(email);
//   };

//   // Function to validate phone number
//   const validatePhone = (phone) => {
//     return phone.length === 10 && !isNaN(phone);
//   };

//   // Function to validate date of birth
//   const validateDOB = (dob) => {
//     const today = new Date();
//     const birthDate = new Date(dob);
//     return birthDate < today;
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     const formData = new FormData(event.target);
//     const email = formData.get("email");
//     const phone = formData.get("phone");
//     const dob = formData.get("dob");

//     if (!validateEmail(email)) {
//       alert("Invalid email. Please check your email address.");
//       return;
//     }

//     if (!validatePhone(phone)) {
//       alert("Invalid phone number. Please enter a 10-digit phone number.");
//       return;
//     }

//     if (!validateDOB(dob)) {
//       alert("Invalid date of birth. Date of birth cannot be in the future.");
//       return;
//     }

//     closeModal(true);
//   };

//   const handleOutsideClick = (event) => {
//     if (event.target.className==="modal") {
//       closeModal();
//     }
//   };

//   return (
//     <div className="modal" onClick={handleOutsideClick}>
//       <div className="modal-content">
//         <h2>Fill Details</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="form-group">
//             <label htmlFor="username">Username:</label>
//             <input
//               type="text"
//               id="username"
//               name="username"
//               required
//               className="input-field"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="email">Email Address:</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               required
//               className="input-field"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="phone">Phone Number:</label>
//             <input
//               type="tel"
//               id="phone"
//               name="phone"
//               required
//               className="input-field"
//             />
//           </div>
//           <div className="form-group">
//             <label htmlFor="dob">Date of Birth:</label>
//             <input
//               type="date"
//               id="dob"
//               name="dob"
//               required
//               className="input-field"
//             />
//           </div>
//           <div className="form-group">
//             <button type="submit" className="submit-button">
//               Submit
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// const App = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div className="App">
//       <h1>User Details Modal</h1>
//       <button onClick={openModal} className="submit-button">
//         Open Form
//       </button>
//       {isOpen && <User closeModal={closeModal} />}
//     </div>
//   );
// };

// export default App;












import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    dob: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (event.target.className === 'modal') {
        closeModal();
      }
    };
    window.addEventListener('click', handleOutsideClick);
    return () => window.removeEventListener('click', handleOutsideClick);
  }, []);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
    setErrors({ ...errors, [id]: '' });
  };

  const validate = () => {
    let newErrors = {};
    if (!formData.username) newErrors.username = 'Username is required';
    if (!formData.email.includes('@')) newErrors.email = 'Invalid email. Please check your email address.';
    if (formData.phone.length !== 10 || isNaN(formData.phone)) newErrors.phone = alert('Invalid phone number. Please enter a 10-digit phone number.');
    if (new Date(formData.dob) > new Date()) newErrors.dob = alert('Invalid date of birth. Please enter a valid date of birth.');
    console.log(formData)
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      alert('Form submitted successfully');
      closeModal();
      setFormData({ username: '', email: '', dob: '', phone: '' });
    }
  };

  return (
    <div className="App">
      <div><h1>User Details Modal</h1></div>
      <button style={{borderRadius:'5px',background:'#007bff',color:'white',border:'none'}} onClick={openModal}>Open Form</button>
      {isModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <h1>Fill Details</h1>
              <div>
                <label htmlFor="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
                {errors.username && <p className="error">{errors.username}</p>}
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                {errors.email && <p className="error">{errors.email}</p>}
              </div>
              <div>
                <label htmlFor="phone">Phone Number:</label>
                <input
                  type="text"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                {errors.phone && <p className="error">{errors.phone}</p>}
              </div>
              <div>
                <label htmlFor="dob">Date of Birth:</label>
                <input
                  type="date"
                  id="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  required
                />
                {errors.dob && <p className="error">{errors.dob}</p>}
              </div>
              
              <button type="submit" className="submit-button">Submit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
