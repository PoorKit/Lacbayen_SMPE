// components/CustomerForm.js
import React, { useState } from 'react';
import Modal from 'react-modal';

const CustomerForm = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can perform any logic to handle form submission
  };

  return (
    <div>
      <button onClick={() => setModalIsOpen(true)}>Open Customer Form</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Customer Form Modal"
      >
        <h2>Customer Form</h2>
        <form onSubmit={handleSubmit}>
          <form onSubmit={handleSubmit}>
            <div>
              <label>First Name:</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div>
              <label>Last Name:</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <label>Contact Number:</label>
              <input
                type="text"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
          <button type="submit">Submit</button>
          <button onClick={() => setModalIsOpen(false)}>Close</button>
        </form>
      </Modal>
    </div>
  );
};

export default CustomerForm;
