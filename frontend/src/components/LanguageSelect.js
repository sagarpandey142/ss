import React from 'react';

const LanguageSelect = ({ selectedLanguage, onSelectLanguage }) => {
  const languages = ['C++', 'Java', 'JavaScript', 'Python'];

  return (
    <div className="mb-4">
      <label htmlFor="language" className="block text-lg font-medium text-gray-700 mb-2">
        Select Language
      </label>
      <select
        id="language"
        value={selectedLanguage}
        onChange={(e) => onSelectLanguage(e.target.value)}
        className="block w-full p-2 border border-gray-300 rounded-md"
      >
        {languages.map((language) => (
          <option key={language} value={language}>
            {language}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSelect;
