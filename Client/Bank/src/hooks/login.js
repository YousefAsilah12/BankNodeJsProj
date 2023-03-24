import {
  useState
} from "react";

const useLogin = () => {
  const endPoint = "http://localhost:5001/api/user/login";
  const [errors, setErrors] = useState(null);
  const [loading, setLoading] = useState(false)

  async function login(body) {
    setErrors(null);
    setLoading(true);
    try {
      const response = await fetch(endPoint, {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      const res = await response.json();
      return res;
    } catch (err) {
      setErrors(err.message);
    } finally {
      setLoading(false);
    }
  }
  
  return {
    errors,
    loading,
    login
  };
};

export default useLogin;