import { Link } from "@tanstack/react-router";
import { brand, footer, navLinks } from "@/content/site";

export function Footer() {
  return (
    <footer className="surface-dark relative overflow-hidden border-t border-[var(--line)]">
      <div className="grid-mesh pointer-events-none absolute inset-0 opacity-70" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 -bottom-40 h-[520px] w-[520px] rounded-full border border-[var(--line-strong)] opacity-40"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -bottom-56 h-[420px] w-[420px] rounded-full border border-[var(--line)] opacity-30"
      />

      <div className="relative mx-auto max-w-[1500px] px-5 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div className="min-w-0">
            <img src={brand.logo} alt={`${brand.footerName} logo`} className="h-10 w-auto" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-[var(--on-dark-muted)]">
              {footer.tagline}
            </p>
            <div className="mt-6 flex gap-2">
              {["LI", "X", "IG"].map((s) => (
                <a
                  key={s}
                  href={footer.contact[3].startsWith("http") ? footer.contact[3] : `https://${footer.contact[3]}`}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--line-strong)] font-mono text-[0.6rem] tracking-widest text-[var(--on-dark-muted)] transition-colors hover:border-[var(--electric)] hover:text-[var(--on-dark)]"
                  aria-label={`${brand.footerName} on ${s}`}
                >
                  {s}
                </a>
              ))}
            </div>
          </div>

          {footer.columns.map((col) => (
            <div key={col.heading} className="min-w-0">
              <h3 className="eyebrow">{col.heading}</h3>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      to={l.path}
                      className="text-sm text-[var(--on-dark-muted)] transition-colors hover:text-[var(--on-dark)]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="min-w-0">
            <h3 className="eyebrow">{footer.contactHeading}</h3>
            <ul className="mt-5 space-y-3 text-sm text-[var(--on-dark-muted)]">
              <li>
                <a
                  className="transition-colors hover:text-[var(--on-dark)]"
                  href={`mailto:${footer.contact[0]}`}
                >
                  {footer.contact[0]}
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-[var(--on-dark)]"
                  href={`tel:${footer.contact[1].replace(/\s/g, "")}`}
                >
                  {footer.contact[1]}
                </a>
              </li>
              <li className="leading-relaxed">{footer.contact[2]}</li>
              <li>
                <a
                  className="transition-colors hover:text-[var(--on-dark)]"
                  href={`https://${footer.contact[3]}`}
                >
                  {footer.contact[3]}
                </a>
              </li>
              <li className="font-mono text-[0.7rem] tracking-wider">{footer.contact[4]}</li>
            </ul>
          </div>
        </div>

        <div className="hair-line mt-14" />

        <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <nav aria-label="Footer" className="flex flex-wrap gap-x-5 gap-y-2">
            {navLinks.map((l) => (
              <Link
                key={l.path}
                to={l.path}
                className="font-mono text-[0.65rem] tracking-[0.2em] uppercase text-[var(--on-dark-muted)] transition-colors hover:text-[var(--on-dark)]"
              >
                {l.name}
              </Link>
            ))}
          </nav>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[0.7rem] text-[var(--on-dark-muted)]">
            <span>{footer.copyright}</span>
            <Link to="/privacy-policy" className="transition-colors hover:text-[var(--on-dark)]">
              Privacy Policy
            </Link>
            <Link to="/terms-and-conditions" className="transition-colors hover:text-[var(--on-dark)]">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
