import { Navigate } from 'react-router';
import Cookies from 'js-cookie';

export function getAuthToken() {
  const token = Cookies.get('jwt');
  return token ? token : null;
}

export const withUserAuthGuard = (WrappedComponent) => {
  return (props) => {
    const token = getAuthToken();
    const user = getUserFromToken(token);

    if (!token || !user || user.role !== 'user') {
      return <Navigate to="/login" />;
    }

    return <WrappedComponent {...props} />;
  };
};

export const withManagerAuthGuard = (WrappedComponent) => {
  return (props) => {
    const token = getAuthToken();
    const user = getUserFromToken(token);

    if (!token || !user || user.role !== 'manager') {
      return <Navigate to="/login" />;
    }

    return <WrappedComponent {...props} />;
  };
};

function getUserFromToken(token) {
  // decode the JWT token and extract the user object
  // return the user object or null if the token is invalid
  const decoded = jwt.decode(token);

   // extract the payload from the decoded token
  const payload = decoded.payload;
  return payload;
}
