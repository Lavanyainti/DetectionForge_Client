import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { PageShell, PageHero, FeatureGrid } from "@/components/site/PageShell";
import { getSubPage, getSection } from "@/components/site/site-content";

export const Route = createFileRoute("/resources/$slug")({
  loader: ({ params }) => {
    const page = getSubPage("resources", params.slug);
    if (!page) throw notFound();
    return { page };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.page.title ?? "Resources"} — Detection Forge` },
      { name: "description", content: loaderData?.page.description ?? "" },
      { property: "og:title", content: `${loaderData?.page.title ?? "Resources"} — Detection Forge` },
      { property: "og:description", content: loaderData?.page.description ?? "" },
    ],
  }),
  errorComponent: ({ error }) => <div className="p-10">Error: {error.message}</div>,
  notFoundComponent: () => (
    <PageShell>
      <PageHero eyebrow="Resources" title="Page not found" description="The page you're looking for doesn't exist." />
    </PageShell>
  ),
  component: SubPage,
});

function SubPage() {
  const { page } = Route.useLoaderData();
  const section = getSection("resources")!;
  return (
    <PageShell>
      <PageHero eyebrow={section.title} title={page.title} description={page.description} />
      <FeatureGrid items={page.items} />
      <section className="border-b border-border bg-surface/40">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="font-mono text-xs uppercase tracking-wider text-teal">More in {section.title}</div>
          <div className="mt-5 flex flex-wrap gap-2">
            {section.pages
              .filter((p) => p.slug !== page.slug)
              .map((p) => (
                <Link
                  key={p.slug}
                  to="/resources/$slug"
                  params={{ slug: p.slug }}
                  className="rounded-md border border-border bg-background px-3 py-2 text-sm text-muted-foreground hover:border-teal/40 hover:text-foreground"
                >
                  {p.label}
                </Link>
              ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
