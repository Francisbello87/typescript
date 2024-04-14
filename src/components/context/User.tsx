import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};
export default function User({ name, email }: AuthUser) {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);
  const handleLogin = () => {
    setUser({
        name,
        email
    })
  };
//   const handleLogout = () => {
//     setUser(null);
//   };
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button>Logout</button>
      <div>User is {user?.name}</div>
      <div>User email is {user?.email}</div>
    </div>
  );
}
