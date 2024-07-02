import React from 'react';

const CodeEditor = ({ code, onCodeChange }) => {
  return (
    <div className="mb-4">
      <label htmlFor="code" className="block text-lg font-medium text-gray-700 mb-2">
        Enter Your Code
      </label>
      <textarea
        id="code"
        value={code}
        onChange={(e) => onCodeChange(e.target.value)}
        rows="10"
        className="block w-full p-2 border border-gray-300 rounded-md"
        placeholder="Write your code here..."
      ></textarea>
    </div>
  );
};

export default CodeEditor;
