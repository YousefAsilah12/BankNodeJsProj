import { Home } from './components/Home/Home';
import { Login } from './components/auth/Login';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import { withUserAuthGuard, withManagerAuthGuard } from './util/auth';
import { DepositForm } from './components/deposit/Deposit';
import { UpdateCreditForm } from './components/updateCreadit/UpdateCredit';
import { Transfer } from './components/transfer/Transfer';
import { Withdraw } from './components/withdraw/Withdraw';
import { UserList } from './components/userList/UserList';
import { SpecificUser } from './components/specificUser/SpecificUser';
function App() {
  const router = createBrowserRouter([
    // { path: '/', element: withUserAuthGuard(Home) },
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/deposit', element: <DepositForm /> },
    { path: '/updateCredit', element: <UpdateCreditForm /> },
    { path: '/transfer', element: <Transfer /> },
    { path: '/withdraw', element: <Withdraw /> },
    { path: '/user-list', element: <UserList /> },
    { path: '/get-user', element: <SpecificUser /> },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;