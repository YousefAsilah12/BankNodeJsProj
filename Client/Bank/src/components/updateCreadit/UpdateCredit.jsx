import { useState } from "react";
import { BankApi } from "../../hooks/userApi/UserHook";
export const UpdateCreditForm = () => {
  const [UCRes, setUCRes] = useState(null)
  const { error, loading, updateCredit } = BankApi()
  const [formData, setFormData] = useState({
    passportId: '',
    credit: 0,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setUCRes(await updateCredit(formData.passportId, formData.credit));
      alert(res.data.message);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>update credit</h1>
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
        Credit:
        <input
          type="number"
          name="credit"
          value={formData.credit}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Update Credit</button>
      {
      UCRes&&
        <div>
        <p> {JSON.stringify(UCRes.message)}</p>
        </div>
    }
    </form>
 
  );
};
