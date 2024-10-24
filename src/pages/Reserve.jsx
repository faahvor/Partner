import React, { useState } from 'react';

const Reserve = ({handle}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok) {
        setMessage('Registration successful!');
      } else {
        setMessage(`Error: ${result.message}`);
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.');
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center mx-[2rem] lg:mx-0">
        
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
      <p className='font-bold text-[2rem] pt-[-2rem] cursor-pointer' onClick={handle}>x</p>
        <h2 className="text-xl font-bold text-center mb-2">Wait! Don’t Miss Out on Growing Your Travel Business!</h2>
        <p className="text-center text-gray-600">Unlock the Secrets to Boosting Your Travel Business with PartnerPlus Pro</p>
        <p className="text-center text-red-500 font-semibold my-2">Seats Are Limited – Secure Your Spot Now!</p>
        {message && <p className="text-center text-green-600 mb-2">{message}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="fullName"
            placeholder="Your full name*"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your email*"
            value={formData.email}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="text"
            name="companyName"
            placeholder="Company name"
            value={formData.companyName}
            onChange={handleChange}
            className="w-full border rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white font-semibold w-full py-2 rounded"
            disabled={loading}
          >
            {loading ? 'Processing...' : 'Reserve My Spot'}
          </button>
        </form>
        <p className="text-xs text-center mt-2 text-gray-500">We'll keep your data safe.</p>
      </div>
    </div>
  );
};

export default Reserve;
