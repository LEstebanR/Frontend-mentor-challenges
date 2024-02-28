"use client";

import React, { ReactNode } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import clsx from "clsx";

type TBreadCrumbProps = {
  separator: ReactNode;
  containerClasses?: string;
  capitalizeLinks?: boolean;
};

const Breadcrumb = ({
  separator,
  containerClasses,
  capitalizeLinks,
}: TBreadCrumbProps) => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);

  return pathNames.length === 0 ? null : (
    <div className={clsx(pathNames.length >= 2 ? "bg-white" : "h-12 bg-bg")}>
      <ul className={containerClasses}>
        <li className="mx-2 font-bold hover:underline">
          <Link href={"/"}>Home</Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          let href = `/${pathNames.slice(0, index + 1).join("/")}`;

          let itemLink = capitalizeLinks
            ? link[0].toUpperCase() + link.slice(1, link.length)
            : link;
          return (
            <React.Fragment key={index}>
              <li
                className={clsx(
                  "mx-2 font-bold hover:underline",
                  paths === href ? "text-primary" : null,
                  pathNames.length >= 2 && paths === href
                    ? "text-secondary"
                    : null
                )}
              >
                <Link href={href}>{itemLink}</Link>
              </li>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
};

export default Breadcrumb;
