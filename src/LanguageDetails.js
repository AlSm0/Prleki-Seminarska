import React from 'react';

const LanguageDetails = ({ language }) => {
  return (
    <div className="language-details">
      <h2>{language.name}</h2>
      <p>{language.description}</p>
    </div>
  );
};

export default LanguageDetails;