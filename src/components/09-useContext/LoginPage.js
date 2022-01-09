import React, { useContext } from 'react';
import { UserContext } from './UserContext';

export const LoginPage = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Login Page</h1>
      <hr />
      <button
        className="btn btn-primary"
        onClick={() =>
          setUser({
            id: 123,
            name: 'Kevin',
          })
        }
      >
        Login
      </button>
    </div>
  );
};
