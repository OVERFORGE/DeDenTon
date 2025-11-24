"use client";

import { retrieveLaunchParams } from "@telegram-apps/sdk";
import { useEffect, useState } from "react";
import { isTelegramEnv } from "@/utils/telegram";

interface TelegramInitData {
  user?: {
    id: number;
    username?: string;
    firstName?: string;
  };
  startParam?: string;
}

interface TelegramUser {
  username: string;
  first_name: string;
  telegram_id: number;
}

const mockUser: TelegramUser = {
  username: "local_user",
  first_name: "Local Dev",
  telegram_id: 123456789,
};

export const useTelegramData = () => {
  const [data, setData] = useState<TelegramUser | null>(null);
  const insideTelegram = isTelegramEnv();

  useEffect(() => {
    try {
      if (insideTelegram) {
        // get all launch params
        const launchParams = retrieveLaunchParams();

        // cast ONLY initData (correct way)
        const initData = (launchParams.initData ?? {}) as TelegramInitData;

        if (initData?.user) {
          const user: TelegramUser = {
            username: initData.user.username ?? "",
            first_name: initData.user.firstName ?? "",
            telegram_id: initData.user.id,
          };

          setData(user);
          return;
        }
      }

      // fallback → localhost or no telegram data
      setData(mockUser);
    } catch (err) {
      console.error("TelegramData error:", err);
      setData(mockUser);
    }
  }, [insideTelegram]);

  return data;
};
