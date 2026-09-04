import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { brand, navCta, navLinks } from "@/content/site";
import { cn } from "@/lib/utils";
import { ArrowGlyph } from "@/components/ui/eyebrow";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled
            ? "border-b border-[var(--line)] bg-[color-mix(in_oklab,var(--abyss)_78%,transparent)] backdrop-blur-xl"
            : "border-b border-transparent",
        )}
      >
        <div className="mx-auto grid max-w-[1500px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 lg:px-10">
          <Link to="/" className="flex min-w-0 items-center gap-3" aria-label={`${brand.name} home`}>
            <img src={brand.logo} alt={`${brand.name} logo`} className="h-9 w-auto shrink-0" />
          </Link>

          <div className="flex items-center gap-2 sm:gap-5">
            <nav aria-label="Primary" className="hidden items-center gap-1 lg:flex">
              {navLinks.map((l) => {
                const active = pathname === l.path;
                return (
                  <Link
                    key={l.path}
                    to={l.path}
                    className={cn(
                      "group relative px-3 py-2 text-[0.8rem] font-medium tracking-wide uppercase transition-colors",
                      active
                        ? "text-[var(--on-dark)]"
                        : "text-[var(--on-dark-muted)] hover:text-[var(--on-dark)]",
                    )}
                  >
                    {l.name}
                    <span
                      className={cn(
                        "absolute inset-x-3 -bottom-0.5 h-px origin-left bg-[var(--electric)] transition-transform duration-300",
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                      )}
                    />
                  </Link>
                );
              })}
            </nav>

            <Link
              to={navCta.path}
              className="group hidden items-center gap-2 rounded-full border border-[var(--line-strong)] px-5 py-2.5 text-[0.75rem] font-semibold tracking-[0.14em] uppercase text-[var(--on-dark)] transition-colors hover:border-[var(--electric)] hover:bg-[color-mix(in_oklab,var(--electric)_14%,transparent)] sm:flex"
            >
              {navCta.label}
              <ArrowGlyph className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--line-strong)] text-[var(--on-dark)] transition-colors hover:border-[var(--electric)] lg:hidden"
            >
              <span className="relative block h-3 w-5">
                <span
                  className={cn(
                    "absolute left-0 h-px w-5 bg-current transition-transform duration-300",
                    open ? "top-1.5 rotate-45" : "top-0",
                  )}
                />
                <span
                  className={cn(
                    "absolute left-0 h-px w-5 bg-current transition-transform duration-300",
                    open ? "top-1.5 -rotate-45" : "top-3",
                  )}
                />
              </span>
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobile-menu"
        hidden={!open}
        className="fixed inset-0 z-40 flex flex-col justify-center bg-[var(--abyss)] px-6 pt-24 pb-12 lg:hidden"
      >
        <div className="grid-mesh pointer-events-none absolute inset-0 opacity-60" />
        <nav aria-label="Mobile" className="relative flex flex-col gap-1">
          {navLinks.map((l, i) => (
            <Link
              key={l.path}
              to={l.path}
              className="flex items-baseline justify-between border-b border-[var(--line)] py-4 text-3xl font-semibold tracking-tight text-[var(--on-dark)]"
            >
              <span>{l.name}</span>
              <span className="font-mono text-xs text-[var(--electric)]">
                {String(i + 1).padStart(2, "0")}
              </span>
            </Link>
          ))}
          <Link
            to={navCta.path}
            className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--brand)] px-6 py-4 text-sm font-semibold tracking-[0.14em] uppercase text-[var(--on-dark)]"
          >
            {navCta.label}
            <ArrowGlyph />
          </Link>
        </nav>
      </div>
    </>
  );
}
