import React, { useState } from 'react';
import axios from 'axios';

const UserForm = ({ user, onSave }) => {
  const [formData, setFormData] = useState({
    name: user ? user.name : '',
    email: user ? user.email : '',
    phone: user ? user.phone : '',
    username: user ? user.username : `USER-${user ? user.name : ''}`,
    street: user ? user.address.street : '',
    city: user ? user.address.city : '',
    company: user ? user.company.name : '',
    website: user ? user.website : '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const url = user ? `https://jsonplaceholder.typicode.com/users/${user.id}` : 'https://jsonplaceholder.typicode.com/users';
    const method = user ? 'put' : 'post';

    axiosmethod
      .then(response => {
        onSave(response.data);
      })
      .catch(error => {
        console.error('There was an error saving the user!', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={formData.name} onChange={handleChange} required minLength="3" />
      </label>
      <label>
        Email:
        <input type="email" name="email" value={formData.email} onChange={handleChange} required />
      </label>
      <label>
        Phone:
        <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      </label>
      <label>
        Username:
        <input type="text" name="username" value={formData.username} readOnly />
      </label>
      <label>
        Street:
        <input type="text" name="street" value={formData.street} onChange={handleChange} required />
      </label>
      <label>
        City:
        <input type="text" name="city" value={formData.city} onChange={handleChange} required />
      </label>
      <label>
        Company:
        <input type="text" name="company" value={formData.company} onChange={handleChange} />
      </label>
      <label>
        Website:
        <input type="url" name="website" value={formData.website} onChange={handleChange} />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

export default UserForm;
