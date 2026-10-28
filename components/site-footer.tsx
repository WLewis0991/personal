import { site } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="pagefoot">
      <div className="container row-between">
        <span>© {site.name} · 2026</span>
        <span className="meta">Built by hand · Los Angeles, CA</span>
      </div>
    </footer>
  );
}
