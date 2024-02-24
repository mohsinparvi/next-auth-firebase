"use client";
import { UserAuth } from "@/app/context/auth-provider";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { user } = UserAuth();
  return (
    <div className="flex justify-between items-center p-8">
      {user}
      <div className="flex items-center gap-4">
        <p>logo</p>
        <ul className="space-x-4 flex items-center gap-4">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="about">About</Link>
          </li>
          <li>
            <Link href="profile">Profile</Link>
          </li>
        </ul>
      </div>
      <div className="space-x-4">
        <Link href="/login">login</Link>
        <Link href="/signup">Signup</Link>
      </div>
    </div>
  );
};

export default Navbar;
