import React, { useState } from 'react';

export const UserDisplay = ({ user }) => {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>Passport ID: {user.passportId}</p>
      <p>Cash: {user.cash}</p>
      <p>Credit: {user.credit}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
    </div>
  );
};
