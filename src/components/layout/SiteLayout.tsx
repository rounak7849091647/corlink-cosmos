import type { ReactNode } from "react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { RouteTransition } from "./RouteTransition";

export function SiteLayout({ children }: { children: ReactNode }) {
  return (
    <div className="surface-dark min-h-screen overflow-x-clip">
      <RouteTransition />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[70] focus:rounded-full focus:bg-[var(--brand)] focus:px-4 focus:py-2 focus:text-sm focus:text-[var(--on-dark)]"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">{children}</main>
      <Footer />
    </div>
  );
}
