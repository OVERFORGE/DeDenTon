"use client";

import { isTelegramEnv } from "@/utils/telegram";

export const useTelegram = () => {
  const insideTelegram = isTelegramEnv();

  if (!insideTelegram) {
    return {
      tg: null,
      user: null,
      initData: null,
    };
  }

  const tg = window.Telegram?.WebApp;

  return {
    tg,
    user: tg?.initDataUnsafe?.user ?? null,
    initData: tg?.initDataUnsafe ?? null,
  };
};
