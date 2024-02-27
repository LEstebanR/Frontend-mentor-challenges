import { FC } from "react";
import { HeartIcon } from "@heroicons/react/16/solid";

const Footer: FC = () => {
  return (
    <footer className="fixed bottom-0 mt-4 flex h-12 w-full justify-center bg-bg">
      <div className="flex items-center gap-1">
        <p>Make with</p>
        <HeartIcon className="size-4 text-red-500" />
        <p>by</p>
        <a
          href="https://www.lesteban.dev/"
          target="_blank"
          className="text-primary"
        >
          LEsteban
        </a>
      </div>
    </footer>
  );
};

export default Footer;
