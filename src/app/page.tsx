import { Raleway } from "next/font/google";
import clsx from "clsx";
import CategoryCard from "../components/categoryCard";
import { DIRECTORY } from "../data/directory";

const raleway = Raleway({ subsets: ["latin"], display: "swap", weight: "700" });

const CATEGORIES = ["newbie", "junior", "intermediate", "advanced", "guru"];

export default function Home() {
  return (
    <div className="mb-12 flex min-h-screenHome flex-col items-center">
      <h1
        className={clsx(
          "my-8 text-center text-4xl font-extrabold  text-primary md:my-24 md:text-6xl",
          raleway.className
        )}
      >
        Frontend Mentor Challenges
      </h1>
      <p className="mb-12 max-w-100 px-4 text-center text-xl text-gray-100">
        <a
          className="underline decoration-primary decoration-dotted underline-offset-2 transition-all duration-300 ease-in-out hover:text-primary"
          href="https://www.frontendmentor.io"
          target="_blank"
        >
          Frontend Mentor
        </a>{" "}
        is an incredible tool to develop your skills as a Frontend Developer, in
        it, you find designs according to your skills and you can practice
        developing them. These are my solutions to some of their challenges.
      </p>
      <div className="grid w-9/12 grid-cols-2 gap-4 md:w-11/12 md:grid-cols-5">
        {CATEGORIES.map((category) => {
          const challenges = DIRECTORY.filter(
            (challenge) => challenge.level === category
          );
          return (
            <CategoryCard
              key={`${category} card`}
              title={category}
              challenges={challenges}
            />
          );
        })}
      </div>
    </div>
  );
}
