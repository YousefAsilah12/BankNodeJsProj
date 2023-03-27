import {
  useState
} from "react";
// Custom hook to make API requests with fetch
export const BankApi = () => {
  const [loading,setLoading]=useState(false)
  const [error,setError]=useState(null)
  const api='http://localhost:5001/api/user';
  const handleError = (error) => {
    console.error(error);
    setError(error);
    // You can add your own error handling logic here
  };

  const getByPId = async (passportId) => {
    setError(null)
    try {
      setLoading(true)
      const response = await fetch(`${api}/${passportId}`, {
        method: "GET",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      return data;
    } catch (error) {
      handleError(error);
    }finally {
      setLoading(false)
    }
  };

  const getAll = async () => {
    setLoading(true);
    setError(null)
    try {
      const response = await fetch(`${api}`, {
        method: "GET",
        credentials: 'include'
      });
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      handleError(error);
    }finally {
      setLoading(false);

    }
  };

  const depositCash = async (passportId, cash) => {
    try {
      setError(null)
      setLoading(true)
      const response = await fetch(`${api}/deposit`, {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          passportId,
          cash
        }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      handleError(error);
    }
    finally{
      setLoading(false);
    }
  };

  const updateCredit = async (passportId, credit) => {
    try {
      setError(null)
      const response = await fetch(`${api}/updateCredit`, {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          passportId,
          credit
        }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      handleError(error);
    }
  };

  const withdraw = async (passportId, amount) => {
    try {
      setError(null)
      setLoading(true);
      const response = await fetch(`${api}/withdraw`, {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          passportId,
          amount
        }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      handleError(error);
    }finally{
      setLoading(false);
    }
  };

  const transfer = async (senderPassportId, receiverPassportId, amount) => {
    try {
      setError(null)
      setLoading(true);
      const response = await fetch(`${api}/transfer`, {
        method: "POST",
        credentials: 'include',
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          senderPassportId,
          receiverPassportId,
          amount
        }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      handleError(error);
    }
    finally {
      setLoading(false);
    }
  };

  return {
    getByPId,
    getAll,
    depositCash,
    updateCredit,
    withdraw,
    transfer,
    loading,
    error
  };
};