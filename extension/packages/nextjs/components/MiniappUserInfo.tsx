"use client";

import Image from "next/image";
import { useMiniapp } from "~~/components/MiniappProvider";

export const MiniappUserInfo = () => {
  const { user, isReady, isMiniApp } = useMiniapp();

  return (
    <div className="flex justify-center items-center space-x-2 flex-col mt-1">
      <p className="my-1 font-medium">MiniApp Status:</p>
      <p className="text-sm">
        {isReady ? (isMiniApp ? "✅ Ready (MiniApp)" : "✅ Ready (WebApp, no User Context)") : "⏳ Loading..."}
      </p>
      {user && (
        <div className="text-center">
          <p className="text-sm font-medium">User Info:</p>
          <p className="text-xs">FID: {user.fid}</p>
          {user.username && <p className="text-xs">Username: {user.username}</p>}
          {user.displayName && <p className="text-xs">Display Name: {user.displayName}</p>}
          {user.pfpUrl && (
            <Image
              src={user.pfpUrl}
              alt="Profile"
              width={32}
              height={32}
              className="rounded-full mx-auto mt-1"
              unoptimized
            />
          )}
        </div>
      )}
    </div>
  );
};
