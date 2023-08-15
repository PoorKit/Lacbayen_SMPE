import React, { useState } from 'react';
import Modal from 'react-modal';
import { toast } from 'react-toastify';

const CustomerForm = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [first_Name, setFirst_Name] = useState('');
  const [last_Name, setLast_Name] = useState('');
  const [contact_Number, setContact_Number] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/Customer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: first_Name,
          last_name: last_Name,
          contact_number: contact_Number,
        }),
      });
  
      if (response.ok) {
        const responseData = await response.json();
        toast.success(responseData.message);
        setModalIsOpen(false);
      } else {
        const responseData = await response.json();
        toast.error(responseData.error);
      }
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <div>
      <button
        onClick={() => setModalIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Customer
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Customer Form Modal"
        className="bg-white rounded-lg p-6 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-4 border-blue-300"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
          },
          content: {
            width: '80%',
            maxWidth: '600px',
          },
        }}
      >
        <h2 className="text-2xl mb-4">Customer Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Form fields */}
          <div>
            <label className="block">First Name:</label>
            <input
              type="text"
              value={first_Name}
              onChange={(e) => setFirst_Name(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block">Last Name:</label>
            <input
              type="text"
              value={last_Name}
              onChange={(e) => setLast_Name(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block">Contact Number:</label>
            <input
              type="text"
              value={contact_Number}
              onChange={(e) => setContact_Number(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
            <button
              onClick={() => setModalIsOpen(false)}
              className="bg-gray-500 text-white px-4 py-2 rounded ml-2"
            >
              Close
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default CustomerForm;
