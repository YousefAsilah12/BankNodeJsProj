import { useState } from "react";
import { BankApi } from "../../hooks/userApi/UserHook";
import { UserDisplay } from "../user/user";

export const SpecificUser = () => {
  const [UserRes, setUserRes] = useState(null)
  const { loading, error, getByPId } = BankApi()
  const [pId, setPId] = useState("")

  if (loading) {
    return <h1>Loading...</h1>
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setUserRes(await getByPId(pId));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>GetUser</h1>
      <label>
        Passport ID:
        <input
          type="text"
          name="passportId"
          required
          onChange={(e) => { setPId(e.target.value) }}
        />
      </label>
      <button type="submit">Get User</button>
      {
        UserRes &&
        <div>
          {UserRes.message ?
            <p p > {JSON.stringify(UserRes.message)}</p>
            : <UserDisplay key={UserRes._id} user={UserRes} />}
        </div>
      }
    </form >
  );
};