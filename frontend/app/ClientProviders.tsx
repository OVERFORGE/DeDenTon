"use client";

import { TonConnectUIProvider } from "@tonconnect/ui-react";
import { TelegramProvider } from "@/src/providers/TelegramProvider";
import { Providers } from "@/app/providers";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

export function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <TelegramProvider>
      <Providers>
        <TonConnectUIProvider>
          <Navbar />
          {children}
          <Footer />
        </TonConnectUIProvider>
      </Providers>
    </TelegramProvider>
  );
}
