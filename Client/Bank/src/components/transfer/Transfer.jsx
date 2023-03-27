





import { useState } from 'react';
import { BankApi } from '../../hooks/userApi/UserHook';

export const Transfer = () => {
  const [transferRes, setTransferRes] = useState(null)
  const { loading, error, transfer } = BankApi()
  const [formData, setFormData] = useState({
    senderPassportId: '',
    receiverPassportId: '',
    amount: 0,
  });

  if (loading) {
    return <h1>Loading....</h1>
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setTransferRes(await transfer(formData.senderPassportId, formData.receiverPassportId, formData.amount))
      console.log(res.data);
      // reset the form
      setFormData({
        senderPassportId: '',
        receiverPassportId: '',
        amount: 0,
      });
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Transfer</h1>
      <div>
        <label htmlFor="senderPassportId">Sender Passport ID:</label>
        <input
          type="text"
          id="senderPassportId"
          name="senderPassportId"
          value={formData.senderPassportId}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="receiverPassportId">Receiver Passport ID:</label>
        <input
          type="text"
          id="receiverPassportId"
          name="receiverPassportId"
          value={formData.receiverPassportId}
          onChange={handleChange}
          required
        />
      </div>
      <div>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={formData.amount}
          onChange={handleChange}
          required
        />
      </div>
      <button type="submit">Transfer</button>
      {
        transferRes &&
        <div>
          <p>{JSON.stringify(transferRes.message)}</p>
        </div>
      }
    </form>
  );
};

