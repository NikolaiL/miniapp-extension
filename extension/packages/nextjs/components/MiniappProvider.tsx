"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { sdk } from "@farcaster/miniapp-sdk";

interface User {
  fid: number;
  username?: string;
  displayName?: string;
  pfpUrl?: string;
}

interface MiniappContextType {
  user: User | null;
  isReady: boolean;
  isMiniApp: boolean;
}

const MiniappContext = createContext<MiniappContextType | undefined>(undefined);

export const useMiniapp = () => {
  const context = useContext(MiniappContext);
  if (context === undefined) {
    throw new Error("useMiniapp must be used within a MiniappProvider");
  }
  return context;
};

interface MiniappProviderProps {
  children: React.ReactNode;
}

export const MiniappProvider = ({ children }: MiniappProviderProps) => {
  const [user, setUser] = useState<User | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [isMiniApp, setIsMiniApp] = useState(false);

  useEffect(() => {
    sdk.actions
      .ready()
      .then(async () => {
        console.log("MiniApp SDK ready");
        const context = await sdk.context;
        const isMiniApp = await sdk.isInMiniApp();
        const user = context?.user ?? null;
        console.log("User", user);
        console.log("Is MiniApp", isMiniApp);
        // set the user to the context
        setUser(user as User);
        setIsMiniApp(isMiniApp);
        setIsReady(true);

        // Expose miniapp data globally for templating systems
        if (typeof window !== "undefined") {
          (window as any).__MINIAPP_DATA__ = {
            user,
            isReady: true,
            isMiniApp,
          };

          // Emit custom event for event-based access
          window.dispatchEvent(
            new CustomEvent("miniapp-data-update", {
              detail: { user, isReady: true, isMiniApp },
            }),
          );
        }
      })
      .catch(error => {
        console.error("MiniApp SDK error", error);
        // Set default values on error
        if (typeof window !== "undefined") {
          (window as any).__MINIAPP_DATA__ = {
            user: null,
            isReady: false,
            isMiniApp: false,
          };
        }
      });
  }, []);

  const value = {
    user,
    isReady,
    isMiniApp,
  };

  return <MiniappContext.Provider value={value}>{children}</MiniappContext.Provider>;
};
