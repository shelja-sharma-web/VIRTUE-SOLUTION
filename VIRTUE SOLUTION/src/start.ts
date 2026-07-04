import { createStart, createMiddleware } from "@tanstack/react-start";

import { renderErrorPage } from "./lib/error-page";

// Redirect legacy blog URLs to home to preserve SEO and remove blog routes
const redirectBlogMiddleware = createMiddleware().server(async ({ request, next }) => {
  try {
    const url = new URL(request.url);
    const path = url.pathname || "/";
    if (path === "/blog" || path === "/blogs" || path.startsWith("/blog/")) {
      return new Response(null, { status: 302, headers: { Location: "/" } });
    }
    return await next();
  } catch (err) {
    return await next();
  }
});

const errorMiddleware = createMiddleware().server(async ({ next }) => {
  try {
    return await next();
  } catch (error) {
    if (error != null && typeof error === "object" && "statusCode" in error) {
      throw error;
    }
    console.error(error);
    return new Response(renderErrorPage(), {
      status: 500,
      headers: { "content-type": "text/html; charset=utf-8" },
    });
  }
});

export const startInstance = createStart(() => ({
  requestMiddleware: [redirectBlogMiddleware, errorMiddleware],
}));
