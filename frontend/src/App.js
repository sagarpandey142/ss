import React, { useState } from 'react';
import axios from 'axios';
import CodeMirror from '@uiw/react-codemirror';
import { basicSetup } from '@codemirror/basic-setup';
import { python } from '@codemirror/lang-python';
import { cpp } from '@codemirror/lang-cpp'; // Using C++ for C language support
import { java } from '@codemirror/lang-java';
import { javascript } from '@codemirror/lang-javascript';
import { oneDark } from '@codemirror/theme-one-dark';

const languageOptions = [
  { value: 'python', label: 'Python' },
  { value: 'cpp', label: 'C++' },
  { value: 'java', label: 'Java' },
  { value: 'javascript', label: 'JavaScript' },
  { value: 'c', label: 'C' } // Ensure this is consistent with backend
];

const defaultCodeSnippets = {
  python: `# Python default code snippet\nprint("Hello, world!")`,
  cpp: `// C++ default code snippet\n#include <iostream>\n\nint main() {\n    std::cout << "Hello, world!" << std::endl;\n    return 0;\n}`,
  java: `// Java default code snippet\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello, world!");\n    }\n}`,
  javascript: `// JavaScript default code snippet\nconsole.log("Hello, world!");`,
  c: `/* C default code snippet */\n#include <stdio.h>\n\nint main() {\n    printf("Hello, world!\\n");\n    return 0;\n}` // Ensure this is consistent with backend
};

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  const [code, setCode] = useState(defaultCodeSnippets['python']);
  const [input, setInput] = useState('');
  const [result, setResult] = useState('');

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    setCode(defaultCodeSnippets[newLanguage] || '');
  };

  const handleCodeChange = (value) => {
    setCode(value);
  };

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = async () => {
    if (!code.trim()) {
      alert('Code cannot be empty!');
      return;
    }

    if (!selectedLanguage) {
      alert('Please select a programming language!');
      return;
    }

    try {
      const response = await axios.post('https://compiler-m00w.onrender.com/compile', {
        language: selectedLanguage,
        code: code,
        input: input
      }, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      setResult(response.data.result || 'No output received');
    } catch (error) {
      console.error('Error submitting code:', error);
      alert('There was an error submitting the code. Please try again.');
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Online Compiler</h1>
      <div className="mb-4">
        <label htmlFor="language" className="block text-sm font-medium text-gray-700">Select Language:</label>
        <select
          id="language"
          value={selectedLanguage}
          onChange={handleLanguageChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          {languageOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="code" className="block text-sm font-medium text-gray-700">Enter Code:</label>
        <CodeMirror
          value={code}
          height="200px"
          extensions={[
            basicSetup,
            selectedLanguage === 'python' && python(),
            selectedLanguage === 'cpp' && cpp(),
            selectedLanguage === 'java' && java(),
            selectedLanguage === 'javascript' && javascript(),
            selectedLanguage === 'c' && cpp(), // Fallback to C++ for C language
          ].filter(Boolean)}
          onChange={handleCodeChange}
          theme={oneDark}
          className="border border-gray-300 rounded-md"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="input" className="block text-sm font-medium text-gray-700">Enter Input (if any):</label>
        <textarea
          id="input"
          value={input}
          onChange={handleInputChange}
          rows="5"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Submit
      </button>
      {result && (
        <div className="mt-4 p-4 border rounded bg-gray-100">
          <h2 className="text-xl font-bold">Result:</h2>
          <pre className="whitespace-pre-wrap">{result}</pre>
        </div>
      )}
    </div>
  );
};

export default App;
