"use client";

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
          {user.pfpUrl && <img src={user.pfpUrl} alt="Profile" className="w-8 h-8 rounded-full mx-auto mt-1" />}
        </div>
      )}
    </div>
  );
};
