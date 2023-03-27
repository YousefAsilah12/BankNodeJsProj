import { useState } from "react";
import { BankApi } from "../../hooks/userApi/UserHook";

export const DepositForm = () => {
  const [depositRes, setDepositRes] = useState(null)
  const { loading, error, depositCash } = BankApi()
  const [formData, setFormData] = useState({
    passportId: '',
    cash: 0,
  });

  if(loading){
    return <h1>Loading...</h1>
  }
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setDepositRes(await depositCash(formData.passportId, formData.cash))
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Deposit</h1>
      <label>
        Passport ID:
        <input
          type="text"
          name="passportId"
          value={formData.passportId}
          onChange={handleChange}
        />
      </label>
      <label>
        Cash:
        <input
          type="number"
          name="cash"
          value={formData.cash}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Deposit</button>
      {
        depositRes &&
        <div>
          <p>{JSON.stringify(depositRes.message)}</p>
        </div>
      }
    </form>
  );
};