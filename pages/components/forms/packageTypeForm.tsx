import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import { toast } from 'react-toastify';

const TypeForm = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [name, setName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log({ name, packageType: selectedPackageType, capacity });
    try {
      const warehouseresponse = await fetch('/api/PackageTypes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
        }),
      });
      if (warehouseresponse.ok) {
        const warehouseresponseData = await warehouseresponse.json();
        setModalIsOpen(false);
        toast.success(warehouseresponseData.message);
      } else {
        const warehouseresponseData = await warehouseresponse.json();
        toast.error(warehouseresponseData.error);
      }
    } catch (error) {
      toast.error(error);
      // console.error('Error submitting warehouse data:', error);
    }
  };

  return (
    <div>
      <button
        onClick={() => setModalIsOpen(true)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Package Type
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setModalIsOpen(false)}
        contentLabel="Package Types Form Modal"
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
        <h2 className="text-2xl mb-4">Package Type Form</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block">Name:</label>
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          {/* Buttons */}
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

export default TypeForm;
