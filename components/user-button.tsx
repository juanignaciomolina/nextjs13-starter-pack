"use client";

import { Button } from "./ui/button";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";

const UserButton: React.FC = () => {
  const { data: sessionData } = useSession();

  return (
    <Button
      variant="outline"
      onClick={sessionData ? () => void signOut() : () => void signIn()}
    >
      {sessionData ? "Sign Out" : "Sign In"}
    </Button>
  );
};

export default UserButton;
