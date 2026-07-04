import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { SOLUTIONS, SolutionPage } from "./solutions.$slug";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const sol = SOLUTIONS[params.slug];
    if (!sol) throw notFound();
    return { sol };
  },
  head: ({ loaderData }) => {
    const sol = loaderData?.sol;
    const title = sol ? `${sol.title} — Virtue Solutions` : "Product — Virtue Solutions";
    const desc = sol?.subtitle ?? "Premium digital signage solutions.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
      ],
    };
  },
  component: SolutionPage,
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold neon-text">Product not found</h1>
        <Link to="/products" className="mt-6 inline-block rounded-full btn-neon px-6 py-3">
          Back to products
        </Link>
      </div>
    </div>
  ),
});
