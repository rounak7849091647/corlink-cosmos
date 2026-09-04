import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteLayout } from "@/components/layout/SiteLayout";
import { FinalCta } from "@/components/sections/FinalCta";
import { Reveal } from "@/components/Reveal";
import { ArrowGlyph, Eyebrow } from "@/components/ui/eyebrow";
import { cn } from "@/lib/utils";
import {
  advantages,
  beginnerMistakes,
  careerPath,
  certifications,
  codeSystems,
  coderDuties,
  challenges,
  criticalNote,
  medHero,
  medSectionTitles,
  mistakesNote,
  quizQuestions,
  quizResults,
  requirements,
  roadmap,
  salaryBands,
  specializations,
  workflowSteps,
  workplaces,
  type CertKey,
  type CodeSystemKey,
} from "@/content/medical";

const title = "Medical Coding — CORLINK IT Career Guide";
const description =
  "What is medical coding? A complete guide to ICD-10, CPT and HCPCS code systems, certifications, salary bands, career path and a step-by-step roadmap.";

export const Route = createFileRoute("/medical-coding")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
    ],
  }),
  component: MedicalCodingRoute,
});

function LightSection({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section className={cn("relative overflow-hidden py-20 lg:py-28", className)}>
      <div className="grid-mesh-light pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-[1500px] px-5 lg:px-10">{children}</div>
    </section>
  );
}

function Heading({ eyebrow, title: t, hint }: { eyebrow: string; title: string; hint?: string }) {
  return (
    <Reveal>
      <Eyebrow className="text-[var(--brand)]">{eyebrow}</Eyebrow>
      <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,3.2rem)] leading-[1.02] font-extrabold tracking-tight">
        {t}
      </h2>
      {hint ? (
        <p className="mt-3 text-sm text-[color-mix(in_oklab,var(--abyss)_60%,transparent)]">{hint}</p>
      ) : null}
    </Reveal>
  );
}

function MedicalCodingRoute() {
  const [codeTab, setCodeTab] = useState<CodeSystemKey>("icd");
  const [certTab, setCertTab] = useState<CertKey>("cpc");
  const [step, setStep] = useState<number | null>(0);
  const [role, setRole] = useState(0);
  const [openStep, setOpenStep] = useState<number | null>(0);
  const [answers, setAnswers] = useState<boolean[]>([]);

  const cs = codeSystems[codeTab];
  const cert = certifications[certTab];
  const yes = answers.filter(Boolean).length;
  const done = answers.length === quizQuestions.length;
  const result = done
    ? yes >= 5
      ? quizResults.strong(yes)
      : yes >= 3
        ? quizResults.medium(yes)
        : quizResults.low(yes)
    : null;

  return (
    <SiteLayout>
      {/* HERO — dark, transitioning into the light health-tech environment */}
      <section className="relative overflow-hidden pt-36 pb-24 lg:pt-48 lg:pb-32">
        <div className="grid-mesh pointer-events-none absolute inset-0 opacity-70" />
        <div className="relative mx-auto grid max-w-[1500px] gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-10">
          <Reveal className="min-w-0">
            <Eyebrow>{medHero.eyebrow}</Eyebrow>
            <h1 className="mt-6 font-display text-[clamp(2.4rem,6.4vw,5.4rem)] leading-[0.9] font-extrabold tracking-tight text-[var(--on-dark)]">
              {medHero.title}
              <br />
              <span className="text-brand-gradient">{medHero.titleAccent}</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-relaxed text-[var(--on-dark-muted)]">
              {medHero.body}
            </p>
            <ul className="mt-8 flex flex-wrap gap-2">
              {medHero.pills.map((p) => (
                <li
                  key={p}
                  className="rounded-full border border-[var(--line-strong)] px-4 py-2 font-mono text-[0.62rem] tracking-[0.16em] uppercase text-[var(--on-dark-muted)]"
                >
                  {p}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="min-w-0">
            <div className="clip-notch relative overflow-hidden border border-[var(--line-strong)]">
              <img
                src={medHero.image}
                alt={medHero.caption}
                className="h-[46vh] w-full object-cover opacity-85 lg:h-[58vh]"
              />
            </div>
            <p className="mt-4 font-mono text-[0.62rem] tracking-[0.2em] uppercase text-[var(--on-dark-muted)]">
              {medHero.caption}
            </p>
          </Reveal>
        </div>
      </section>

      {/* WORKFLOW */}
      <LightSection className="clip-diagonal-top bg-[var(--on-dark)] text-[var(--abyss)]">
        <Heading {...medSectionTitles.workflow} />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
          <ol className="flex flex-col">
            {workflowSteps.map((s, i) => (
              <li key={s.n}>
                <button
                  type="button"
                  onClick={() => setStep(i)}
                  aria-pressed={step === i}
                  className={cn(
                    "flex w-full items-baseline gap-5 border-b border-[color-mix(in_oklab,var(--abyss)_10%,transparent)] py-4 text-left transition-colors",
                    step === i ? "text-[var(--brand)]" : "hover:text-[var(--brand)]",
                  )}
                >
                  <span className="font-mono text-[0.68rem] tracking-[0.2em]">{s.n}</span>
                  <span className="font-display text-lg font-bold tracking-tight">{s.t}</span>
                </button>
              </li>
            ))}
          </ol>
          <div className="border border-[color-mix(in_oklab,var(--abyss)_12%,transparent)] p-7 lg:p-10">
            <p className="font-mono text-[0.62rem] tracking-[0.24em] uppercase text-[var(--brand)]">
              STEP {workflowSteps[step ?? 0].n}
            </p>
            <h3 className="mt-4 font-display text-2xl font-bold tracking-tight">
              {workflowSteps[step ?? 0].t}
            </h3>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-[color-mix(in_oklab,var(--abyss)_68%,transparent)]">
              {workflowSteps[step ?? 0].d}
            </p>
            <p className="mt-8 border-l-2 border-[var(--brand)] pl-4 text-sm leading-relaxed text-[color-mix(in_oklab,var(--abyss)_75%,transparent)]">
              {criticalNote}
            </p>
          </div>
        </div>
      </LightSection>

      {/* CODE SYSTEMS */}
      <LightSection className="bg-[var(--on-dark)] text-[var(--abyss)]">
        <Heading {...medSectionTitles.codes} />
        <div
          role="tablist"
          aria-label="Code systems"
          className="mt-10 flex flex-wrap gap-2 border-b border-[color-mix(in_oklab,var(--abyss)_12%,transparent)]"
        >
          {(Object.keys(codeSystems) as CodeSystemKey[]).map((k) => (
            <button
              key={k}
              role="tab"
              type="button"
              aria-selected={codeTab === k}
              onClick={() => setCodeTab(k)}
              className={cn(
                "-mb-px border-b-2 px-4 py-3 font-mono text-[0.65rem] tracking-[0.18em] uppercase transition-colors",
                codeTab === k
                  ? "border-[var(--brand)] text-[var(--brand)]"
                  : "border-transparent text-[color-mix(in_oklab,var(--abyss)_55%,transparent)] hover:text-[var(--abyss)]",
              )}
            >
              {codeSystems[k].tab}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div>
            <h3 className="font-display text-3xl font-extrabold tracking-tight">{cs.name}</h3>
            <p className="mt-2 text-sm text-[color-mix(in_oklab,var(--abyss)_60%,transparent)]">
              {cs.full}
            </p>
            <p className="mt-5 text-[0.95rem] leading-relaxed">{cs.purpose}</p>
            <ul className="mt-8 space-y-2">
              {cs.examples.map(([code, desc]) => (
                <li
                  key={code}
                  className="flex flex-col gap-1 border border-[color-mix(in_oklab,var(--abyss)_12%,transparent)] p-4 sm:flex-row sm:items-center sm:gap-5"
                >
                  <span className="w-24 shrink-0 font-mono text-sm font-semibold text-[var(--brand)]">
                    {code}
                  </span>
                  <span className="text-sm text-[color-mix(in_oklab,var(--abyss)_68%,transparent)]">
                    {desc}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <ul className="space-y-3">
              {cs.struct.map(([k, label, meaning]) => (
                <li
                  key={k + label}
                  className="grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-4 border-b border-[color-mix(in_oklab,var(--abyss)_10%,transparent)] pb-3"
                >
                  <span className="font-mono text-sm font-semibold text-[var(--brand)]">{k}</span>
                  <span>
                    <span className="block text-sm font-semibold">{label}</span>
                    <span className="block text-sm text-[color-mix(in_oklab,var(--abyss)_62%,transparent)]">
                      {meaning}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-8 border-l-2 border-[var(--brand)] bg-[color-mix(in_oklab,var(--brand)_6%,transparent)] p-5 text-sm leading-relaxed">
              {cs.tip}
            </p>
          </div>
        </div>
      </LightSection>

      {/* DAILY ROLE + WORKPLACES */}
      <LightSection className="bg-[var(--on-dark)] text-[var(--abyss)]">
        <Heading {...medSectionTitles.daily} />
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <ul className="space-y-3">
            {coderDuties.map((d, i) => (
              <Reveal
                as="li"
                key={d}
                delay={i * 60}
                className="flex items-baseline gap-5 border-b border-[color-mix(in_oklab,var(--abyss)_10%,transparent)] pb-3"
              >
                <span className="font-mono text-[0.65rem] text-[var(--brand)]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[0.95rem]">{d}</span>
              </Reveal>
            ))}
          </ul>
          <div>
            <h3 className="font-display text-xl font-bold tracking-tight">
              {medSectionTitles.workplaces}
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-2">
              {workplaces.map((w) => (
                <li
                  key={w}
                  className="border border-[color-mix(in_oklab,var(--abyss)_12%,transparent)] p-3 text-sm"
                >
                  {w}
                </li>
              ))}
            </ul>
            <img
              src="/assets/images/med-grid-doctor.jpg"
              alt="Healthcare professionals reviewing records"
              loading="lazy"
              className="mt-6 h-56 w-full object-cover"
            />
          </div>
        </div>
      </LightSection>

      {/* SPECIALIZATIONS */}
      <LightSection className="bg-[var(--on-dark)] text-[var(--abyss)]">
        <Heading {...medSectionTitles.specializations} />
        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {specializations.map((s, i) => (
            <Reveal
              as="li"
              key={s.title}
              delay={i * 80}
              className="border border-[color-mix(in_oklab,var(--abyss)_12%,transparent)] p-7"
            >
              <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-[var(--brand)]">
                {s.badge}
              </span>
              <h3 className="mt-4 font-display text-xl font-bold tracking-tight">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-[color-mix(in_oklab,var(--abyss)_65%,transparent)]">
                {s.body}
              </p>
            </Reveal>
          ))}
        </ul>
      </LightSection>

      {/* REQUIREMENTS */}
      <LightSection className="bg-[var(--on-dark)] text-[var(--abyss)]">
        <Heading {...medSectionTitles.requirements} />
        <div className="mt-12 grid gap-10 lg:grid-cols-3">
          <div>
            <h3 className="font-display text-xl font-bold tracking-tight">Eligibility</h3>
            <p className="mt-4 text-sm">
              <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-[var(--brand)]">
                Minimum
              </span>
              <br />
              {requirements.eligibility.minimum}
            </p>
            <p className="mt-4 text-sm">
              <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-[var(--brand)]">
                Preferred
              </span>
              <br />
              {requirements.eligibility.preferred}
            </p>
            <ul className="mt-6 space-y-2">
              {requirements.eligibility.skills.map((s) => (
                <li
                  key={s}
                  className="border-t border-[color-mix(in_oklab,var(--abyss)_10%,transparent)] pt-2 text-sm"
                >
                  {s}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold tracking-tight">Syllabus</h3>
            <ul className="mt-5 space-y-2">
              {requirements.syllabus.map(([t, d]) => (
                <li
                  key={t}
                  className="border-b border-[color-mix(in_oklab,var(--abyss)_10%,transparent)] pb-2"
                >
                  <span className="block text-sm font-semibold">{t}</span>
                  <span className="block text-sm text-[color-mix(in_oklab,var(--abyss)_62%,transparent)]">
                    {d}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-5 font-mono text-[0.62rem] tracking-[0.2em] uppercase text-[var(--brand)]">
              {requirements.duration}
            </p>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold tracking-tight">Tools</h3>
            <p className="mt-3 text-sm text-[color-mix(in_oklab,var(--abyss)_62%,transparent)]">
              {requirements.toolsIntro}
            </p>
            <ul className="mt-5 space-y-2">
              {requirements.tools.map(([t, d]) => (
                <li
                  key={t}
                  className="border-b border-[color-mix(in_oklab,var(--abyss)_10%,transparent)] pb-2"
                >
                  <span className="block text-sm font-semibold">{t}</span>
                  <span className="block text-sm text-[color-mix(in_oklab,var(--abyss)_62%,transparent)]">
                    {d}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </LightSection>

      {/* CERTIFICATIONS — dark band */}
      <section className="clip-diagonal-both relative overflow-hidden py-24 lg:py-32">
        <div className="grid-mesh pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-[1500px] px-5 lg:px-10">
          <Eyebrow>{medSectionTitles.certifications.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,3.2rem)] font-extrabold tracking-tight text-[var(--on-dark)]">
            {medSectionTitles.certifications.title}
          </h2>

          <div role="tablist" aria-label="Certifications" className="mt-10 flex flex-wrap gap-2">
            {(Object.keys(certifications) as CertKey[]).map((k) => (
              <button
                key={k}
                role="tab"
                type="button"
                aria-selected={certTab === k}
                onClick={() => setCertTab(k)}
                className={cn(
                  "rounded-full border px-5 py-2.5 font-mono text-[0.62rem] tracking-[0.18em] uppercase transition-colors",
                  certTab === k
                    ? "border-[var(--electric)] bg-[color-mix(in_oklab,var(--electric)_14%,transparent)] text-[var(--on-dark)]"
                    : "border-[var(--line-strong)] text-[var(--on-dark-muted)] hover:text-[var(--on-dark)]",
                )}
              >
                {certifications[k].tab}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="panel-dark p-7 lg:p-9">
              <h3 className="font-display text-3xl font-extrabold tracking-tight text-[var(--on-dark)]">
                {cert.name}
              </h3>
              <p className="mt-2 text-sm text-[var(--on-dark-muted)]">{cert.full}</p>
              <p className="mt-1 font-mono text-[0.62rem] tracking-[0.2em] uppercase text-[var(--electric)]">
                {cert.by} · {cert.level}
              </p>
              <ul className="mt-7 grid grid-cols-2 gap-3">
                {cert.stats.map(([k, v]) => (
                  <li key={k} className="border border-[var(--line-strong)] p-4">
                    <span className="block font-mono text-[0.58rem] tracking-[0.2em] uppercase text-[var(--on-dark-muted)]">
                      {k}
                    </span>
                    <span className="mt-1 block text-lg font-semibold text-[var(--on-dark)]">{v}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm leading-relaxed text-[var(--on-dark-muted)]">{cert.focus}</p>
            </div>
            <ol className="space-y-3">
              {cert.steps.map((s, i) => (
                <li
                  key={s}
                  className="flex items-baseline gap-5 border-b border-[var(--line)] pb-3 text-sm text-[var(--on-dark-muted)]"
                >
                  <span className="font-mono text-[0.62rem] text-[var(--electric)]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  {s}
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* SALARY */}
      <LightSection className="bg-[var(--on-dark)] text-[var(--abyss)]">
        <Heading {...medSectionTitles.salary} />
        <div className="mt-12 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <label
              htmlFor="salary-profile"
              className="block font-mono text-[0.6rem] tracking-[0.24em] uppercase text-[var(--brand)]"
            >
              Your profile
            </label>
            <select
              id="salary-profile"
              value={role}
              onChange={(e) => setRole(Number(e.target.value))}
              className="mt-3 w-full border border-[color-mix(in_oklab,var(--abyss)_18%,transparent)] bg-transparent px-4 py-3 text-sm outline-none focus:border-[var(--brand)]"
            >
              {salaryBands.map((b, i) => (
                <option key={b.label} value={i}>
                  {b.label}
                </option>
              ))}
            </select>
            <p className="mt-8 font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-none font-extrabold tracking-tight text-[var(--brand)]">
              {salaryBands[role].range}
            </p>
            <p className="mt-3 text-sm text-[color-mix(in_oklab,var(--abyss)_62%,transparent)]">
              {salaryBands[role].label}
            </p>
          </div>
          <ul className="space-y-5">
            {salaryBands.map((b, i) => (
              <li key={b.label}>
                <div className="flex items-baseline justify-between gap-4 text-sm">
                  <span className={cn(i === role && "font-semibold text-[var(--brand)]")}>
                    {b.label}
                  </span>
                  <span className="font-mono text-[0.72rem]">{b.range}</span>
                </div>
                <div className="mt-2 h-1.5 w-full bg-[color-mix(in_oklab,var(--abyss)_8%,transparent)]">
                  <div
                    className="h-full bg-[var(--brand)] transition-all duration-700"
                    style={{ width: `${b.pct}%` }}
                  />
                </div>
              </li>
            ))}
          </ul>
        </div>
      </LightSection>

      {/* CAREER PATH */}
      <LightSection className="bg-[var(--on-dark)] text-[var(--abyss)]">
        <Heading {...medSectionTitles.career} />
        <ul className="mt-12 grid gap-4 lg:grid-cols-5">
          {careerPath.map((c) => (
            <li
              key={c.role}
              className="group border border-[color-mix(in_oklab,var(--abyss)_12%,transparent)] p-6 transition-colors hover:border-[var(--brand)]"
            >
              <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase text-[var(--brand)]">
                {c.yr}
              </span>
              <h3 className="mt-3 font-display text-lg leading-tight font-bold tracking-tight">
                {c.role}
              </h3>
              <p className="mt-2 font-mono text-sm font-semibold">{c.sal}</p>
              <ul className="mt-4 space-y-1">
                {c.skills.map((s) => (
                  <li
                    key={s}
                    className="text-xs text-[color-mix(in_oklab,var(--abyss)_60%,transparent)]"
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </LightSection>

      {/* HONEST ASSESSMENT */}
      <LightSection className="bg-[var(--on-dark)] text-[var(--abyss)]">
        <Heading {...medSectionTitles.honest} />
        <div className="mt-12 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="font-display text-xl font-bold tracking-tight text-[var(--brand)]">
              Advantages
            </h3>
            <ul className="mt-5 space-y-2">
              {advantages.map((a) => (
                <li
                  key={a}
                  className="border-b border-[color-mix(in_oklab,var(--abyss)_10%,transparent)] pb-2 text-sm"
                >
                  {a}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-display text-xl font-bold tracking-tight">Challenges</h3>
            <ul className="mt-5 space-y-2">
              {challenges.map((c) => (
                <li
                  key={c}
                  className="border-b border-[color-mix(in_oklab,var(--abyss)_10%,transparent)] pb-2 text-sm text-[color-mix(in_oklab,var(--abyss)_68%,transparent)]"
                >
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-12 border-l-2 border-[var(--brand)] pl-6">
          <h3 className="font-display text-lg font-bold tracking-tight">Beginner Mistakes</h3>
          <ul className="mt-4 flex flex-wrap gap-2">
            {beginnerMistakes.map((m) => (
              <li
                key={m}
                className="border border-[color-mix(in_oklab,var(--abyss)_14%,transparent)] px-3 py-2 text-sm"
              >
                {m}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm font-semibold">{mistakesNote}</p>
        </div>
      </LightSection>

      {/* ROADMAP — dark */}
      <section className="clip-diagonal-top relative overflow-hidden py-24 lg:py-32">
        <div className="grid-mesh pointer-events-none absolute inset-0 opacity-60" />
        <div className="relative mx-auto max-w-[1500px] px-5 lg:px-10">
          <Eyebrow>{medSectionTitles.roadmapT.eyebrow}</Eyebrow>
          <h2 className="mt-5 font-display text-[clamp(1.9rem,4vw,3.2rem)] font-extrabold tracking-tight text-[var(--on-dark)]">
            {medSectionTitles.roadmapT.title}
          </h2>
          <p className="mt-3 text-sm text-[var(--on-dark-muted)]">{medSectionTitles.roadmapT.hint}</p>

          <ol className="mt-12 border-t border-[var(--line-strong)]">
            {roadmap.map((r, i) => {
              const open = openStep === i;
              return (
                <li key={r.num} className="border-b border-[var(--line-strong)]">
                  <button
                    type="button"
                    onClick={() => setOpenStep(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-start gap-5 py-6 text-left"
                  >
                    <span className="mt-1 font-mono text-[0.68rem] tracking-[0.2em] text-[var(--electric)]">
                      {r.num}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-display text-[clamp(1.15rem,2.2vw,1.7rem)] leading-tight font-bold tracking-tight text-[var(--on-dark)]">
                        {r.title}
                      </span>
                      <span className="mt-2 block text-sm text-[var(--on-dark-muted)]">
                        {r.summary}
                      </span>
                    </span>
                    <span className="shrink-0 font-mono text-[0.6rem] tracking-[0.18em] uppercase text-[var(--on-dark-muted)]">
                      {r.dur}
                    </span>
                  </button>
                  {open ? (
                    <div className="pb-8 pl-0 sm:pl-12">
                      <p className="max-w-2xl text-sm leading-relaxed text-[var(--on-dark-muted)]">
                        {r.detail}
                      </p>
                      <ul className="mt-5 space-y-2">
                        {r.checklist.map((c) => (
                          <li
                            key={c}
                            className="flex items-baseline gap-3 text-sm text-[var(--on-dark)]"
                          >
                            <span className="h-1 w-1 shrink-0 rounded-full bg-[var(--electric)]" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      {/* QUIZ */}
      <LightSection className="bg-[var(--on-dark)] text-[var(--abyss)]">
        <Heading {...medSectionTitles.quiz} />
        <ol className="mt-12 max-w-3xl space-y-4">
          {quizQuestions.map((q, i) => (
            <li
              key={q}
              className="flex flex-col gap-3 border-b border-[color-mix(in_oklab,var(--abyss)_10%,transparent)] pb-4 sm:flex-row sm:items-center sm:justify-between sm:gap-8"
            >
              <span className="text-[0.95rem]">{q}</span>
              <span className="flex shrink-0 gap-2">
                {[true, false].map((v) => (
                  <button
                    key={String(v)}
                    type="button"
                    aria-pressed={answers[i] === v}
                    onClick={() =>
                      setAnswers((prev) => {
                        const next = [...prev];
                        next[i] = v;
                        return next;
                      })
                    }
                    className={cn(
                      "rounded-full border px-5 py-2 font-mono text-[0.6rem] tracking-[0.18em] uppercase transition-colors",
                      answers[i] === v
                        ? "border-[var(--brand)] bg-[var(--brand)] text-[var(--on-dark)]"
                        : "border-[color-mix(in_oklab,var(--abyss)_18%,transparent)] hover:border-[var(--brand)]",
                    )}
                  >
                    {v ? "Yes" : "No"}
                  </button>
                ))}
              </span>
            </li>
          ))}
        </ol>

        <div aria-live="polite" className="mt-10 max-w-3xl">
          {result ? (
            <div className="border-l-2 border-[var(--brand)] bg-[color-mix(in_oklab,var(--brand)_6%,transparent)] p-6">
              <h3 className="font-display text-xl font-bold tracking-tight">{result.t}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[color-mix(in_oklab,var(--abyss)_70%,transparent)]">
                {result.b}
              </p>
              <button
                type="button"
                onClick={() => setAnswers([])}
                className="mt-5 inline-flex items-center gap-2 font-mono text-[0.6rem] tracking-[0.2em] uppercase text-[var(--brand)]"
              >
                Reset <ArrowGlyph className="h-3 w-3" />
              </button>
            </div>
          ) : (
            <p className="font-mono text-[0.62rem] tracking-[0.2em] uppercase text-[color-mix(in_oklab,var(--abyss)_50%,transparent)]">
              {answers.filter((a) => a !== undefined).length}/{quizQuestions.length} answered
            </p>
          )}
        </div>
      </LightSection>

      <FinalCta />
    </SiteLayout>
  );
}
