"use client";
import { FC } from "react";
import { HeartIcon } from "@heroicons/react/16/solid";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const Footer: FC = () => {
  const paths = usePathname();
  const pathNames = paths.split("/").filter((path) => path);
  return (
    <footer
      className={clsx(
        "fixed bottom-0 flex h-12 w-full justify-center py-4",
        pathNames.length >= 2 ? "bg-white" : "bg-bg"
      )}
    >
      <div className="flex items-center gap-1">
        <p>Make with</p>
        <HeartIcon className="size-4 text-red-500" />
        <p>by</p>
        <a
          href="https://www.lesteban.dev/"
          target="_blank"
          className={clsx(
            " underline decoration-primary  decoration-dotted underline-offset-4",
            pathNames.length >= 2 ? "font-bold text-secondary" : "text-primary"
          )}
        >
          LEsteban
        </a>
      </div>
    </footer>
  );
};

export default Footer;
