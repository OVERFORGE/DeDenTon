export const isTelegramEnv = () => {
  if (typeof window === "undefined") return false;

  // Case 1: Real Telegram Mini App (iOS/Android/Desktop)
  if (window.Telegram?.WebApp) return true;

  // Case 2: Telegram Web Browser (web.telegram.org)
  const ua = navigator.userAgent.toLowerCase();
  if (ua.includes("telegram")) return true;

  return false;
};
