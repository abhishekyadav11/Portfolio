import { ArrowUp } from "lucide-react";
import { profile } from "@/data/resume";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 text-sm text-muted sm:px-8">
        <p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
        <a href="#top" className="inline-flex items-center gap-2 transition hover:text-ink">
          Back to top <ArrowUp size={15} />
        </a>
      </div>
    </footer>
  );
}
