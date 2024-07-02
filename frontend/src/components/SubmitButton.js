import React from 'react';

const SubmitButton = ({ onSubmit }) => {
  return (
    <button
      onClick={onSubmit}
      className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      Submit
    </button>
  );
};

export default SubmitButton;
