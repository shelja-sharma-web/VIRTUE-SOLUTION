import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  head: () => ({ meta: [{ title: "About — Virtue Solutions" }] }),
  component: AboutRedirect,
});

function AboutRedirect() {
  if (typeof window !== "undefined") {
    window.location.href = "/about-us";
  }
  return null;
}
