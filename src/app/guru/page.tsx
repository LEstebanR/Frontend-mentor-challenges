import { FC } from "react";
import clsx from "clsx";
import { Raleway } from "next/font/google";

const raleway = Raleway({ subsets: ["latin"], display: "swap", weight: "700" });

const Page: FC = () => {
  return (
    <div>
      <h1
        className={clsx(
          "my-8 text-center text-4xl font-extrabold  text-primary md:my-24 md:text-6xl",
          raleway.className
        )}
      >
        Guru challenges
      </h1>
    </div>
  );
};

export default Page;
