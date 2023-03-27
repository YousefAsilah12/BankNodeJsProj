import React, { useState } from 'react';
import { BankApi } from '../../hooks/userApi/UserHook';
// import axios from 'axios';

export const Withdraw = () => {
  const { loading, error, withdraw } = BankApi()
  const [errorMessage, setErrorMessage] = useState('');
  const [withdrawRes, setWithdrawres] = useState(null)
  const [formData, setFormData] = useState({
    passportId: '',
    amount: 0,
  });

  if (loading) {
    return <h1>Loading....</h1>
  }
  if (error !== null) {
    return <h1>{error}</h1>
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setWithdrawres(await withdraw(formData.passportId, formData.amount));
      setFormData({ passportId: '', amount: 0 });
      setErrorMessage('');
    } catch (error) {
      console.error(error);
      setErrorMessage('Withdrawal failed. Please check your account balance and try again.');
    }
  };
  return (
    <div>
      <h2>Withdraw</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="passportId">Passport ID:</label>
        <input
          type="text"
          id="passportId"
          name="passportId"
          value={formData.passportId}
          onChange={handleChange}
        />
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
        />
        <button type="submit">Withdraw</button>
      </form>

      {
        withdrawRes &&
        <div>
          <p>{JSON.stringify(withdrawRes.message)}</p>
        </div>
      }
    </div>
  );
};

