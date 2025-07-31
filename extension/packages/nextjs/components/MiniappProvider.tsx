"use client";

import { useEffect } from "react";
import { sdk } from "@farcaster/miniapp-sdk";

interface MiniappProviderProps {
  children: React.ReactNode;
}

export const MiniappProvider = ({ children }: MiniappProviderProps) => {
  useEffect(() => {
    sdk.actions
      .ready()
      .then(() => {
        console.log("MiniApp SDK ready");
      })
      .catch(error => {
        console.error("MiniApp SDK error", error);
      });
  }, []);

  return <>{children}</>;
};