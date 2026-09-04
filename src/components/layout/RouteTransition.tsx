import { useRouterState } from "@tanstack/react-router";

/** Thin blue line that sweeps across the screen during navigation. */
export function RouteTransition() {
  const isLoading = useRouterState({ select: (s) => s.status === "pending" || s.isLoading });

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-x-0 top-0 z-[60] h-px overflow-hidden"
    >
      {isLoading ? (
        <span className="animate-route-sweep block h-px w-1/3 bg-[var(--electric)] shadow-[0_0_14px_var(--brand-glow)]" />
      ) : null}
    </div>
  );
}
