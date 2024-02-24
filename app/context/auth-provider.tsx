"use client";
import { ReactNode, useContext, useState } from "react";
import { AuthContext } from "./auth-context";

AuthContext.Provider;
export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState("hello");
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
