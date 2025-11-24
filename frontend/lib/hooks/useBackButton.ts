"use client";

import { backButton } from "@telegram-apps/sdk";
import { useEffect } from "react";
import { isTelegramEnv } from "@/utils/telegram";

export function useBackButton(onBack: () => void) {
  useEffect(() => {
    if (!isTelegramEnv()) return;

    backButton.show();
    backButton.onClick(onBack);

    return () => {
      backButton.hide();
      backButton.offClick(onBack);
    };
  }, [onBack]);
}
