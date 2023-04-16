import React from "react";
import { usePageContext } from "./usePageContext";

export { Link };

function Link({
  href,
  className,
  children,
}: {
  href?: string;
  className?: string;
  children: React.ReactNode;
}) {
  let base = import.meta.env.BASE_URL;
  let processedHref = href;
  if (base) {
    if (!href?.startsWith("/")) {
      throw new Error("Link href should start with /");
    }
    if (base.endsWith("/")) {
      base = base.slice(0, -1);
    }
    processedHref = `${base}${href}`;
  }

  const pageContext = usePageContext();
  const completeClassName = [
    className,
    pageContext.urlPathname === href && "is-active",
  ]
    .filter(Boolean)
    .join(" ");
  return (
    <a href={processedHref} className={completeClassName}>
      {children}
    </a>
  );
}
