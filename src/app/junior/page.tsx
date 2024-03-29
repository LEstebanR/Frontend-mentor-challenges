import { FC } from "react";
import clsx from "clsx";
import { Raleway } from "next/font/google";
import { DIRECTORY } from "@/data/directory";
import ChallengeCard from "@/components/challengeCard";

const raleway = Raleway({ subsets: ["latin"], display: "swap", weight: "700" });
const challenge = DIRECTORY.filter((item) => item.level === "junior");

const Page: FC = () => {
  return (
    <div className="mb-20 flex min-h-screenWithFooter flex-col items-center">
      <h1
        className={clsx(
          "my-8 text-center text-4xl font-extrabold  text-primary md:my-24 md:text-6xl",
          raleway.className
        )}
      >
        Junior challenges
      </h1>
      <div className="grid w-full grid-cols-1 justify-items-center gap-4  md:grid-cols-3 ">
        {challenge.map((item, index) => {
          return (
            <ChallengeCard
              key={`card ${item.title}`}
              title={item.title}
              url={item.url}
              image={item.image}
              date={item.date}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Page;
