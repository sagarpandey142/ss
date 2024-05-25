"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";
import  {SignupButton}  from '../../buttons/signup-buttons';
import { LoginButton } from "../../buttons/login-buttons";
import { LogoutButton } from "../../buttons/logout-button";

export const NavBarButtons = () => {
  const { user } = useUser();

  return (
    <div className="nav-bar__buttons">
      {!user && (
        <>
          <SignupButton />
          <LoginButton />
        </>
      )}
      {user && (
        <>
          <LogoutButton />
        </>
      )}
    </div>
  );
};