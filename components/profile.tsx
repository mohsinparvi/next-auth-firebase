"use client";
import { UserAuth } from "@/app/context/auth-provider";
import React from "react";

const Profile = () => {
  const { user, setUser } = UserAuth();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-6xl font-bold">Profile page</h1>
      <button onClick={() => setUser("Mohsin")}>Change name</button>
    </div>
  );
};

export default Profile;
