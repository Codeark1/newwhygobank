import React from 'react';

const Customer = () => {
  // Retrieve customer full name from session storage
  const fullName = sessionStorage.getItem('fullName');

  return (
    <div>
    {fullName}
    </div>
  );
};

export default Customer;
