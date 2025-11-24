"use client";

import { FC, ReactNode, useEffect, useState } from "react";
import { init, backButton, miniApp, expandViewport } from "@telegram-apps/sdk";
import { isTelegramEnv } from "@/utils/telegram";

export const TelegramProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!isTelegramEnv()) {
      console.log("Not inside Telegram — skipping Telegram init()");
      setReady(true);
      return;
    }

    // Initialize SDK
    init();
    expandViewport();
    miniApp.ready();

    // Mount back button
    backButton.mount();
    backButton.hide(); // hidden by default

    setReady(true);

    return () => {
      backButton.unmount();
    };
  }, []);

  if (!ready) return null;

  return <>{children}</>;
};
