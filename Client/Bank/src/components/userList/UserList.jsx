import { useEffect, useState } from "react";
import { UserDisplay } from "../user/User";
import { BankApi } from "../../hooks/userApi/UserHook";
export const UserList = () => {
  const [users, setUsers] = useState(null);

  const { getAll, loading } = BankApi();
  const getUsers = async () => {
    try {
      setUsers(await getAll());
    } catch (err) {
      console.log(err);
    }
  };

  if (loading) {
    return <h1>Loading....</h1>
  }

  return (
    <div>
      
      <button onClick={getUsers}>Get Users</button>
      {users && (
        <div>
          {users.map((user) => (
            <UserDisplay key={user._id} user={user} />
          ))}
        </div>
      )}

    </div>
  );
};
