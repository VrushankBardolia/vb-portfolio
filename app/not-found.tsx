import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export const dynamic = "force-static";

export default function NotFound() {
  return (
    <main className="max-w-[34rem] mx-auto px-5 pt-16 text-left">
      <h1 className="text-3xl font-display font-semibold mb-4 text-[var(--fg)]">
        404
      </h1>
      <p className="text-[var(--muted)] mb-6">Page not found</p>
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "outline" }),
          "border-[var(--line)] text-[var(--fg)] hover:text-[var(--accent)] hover:border-[var(--accent)]"
        )}
      >
        Back to home
      </Link>
    </main>
  );
}
