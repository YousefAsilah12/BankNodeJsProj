import { DepositForm } from "../deposit/Deposit"
import { Transfer } from "../transfer/Transfer"
import { UpdateCreditForm } from "../updateCreadit/UpdateCredit"
import { UserList } from "../userList/UserList"
import { Withdraw } from "../withdraw/Withdraw"







export const Home = () => {
  return <div>

    <UserList />
    <SpecificUserList />
    <DepositForm />
    <Withdraw />
    <UpdateCreditForm />
    <Transfer />
  </div>
}