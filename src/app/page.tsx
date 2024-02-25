import Footer from "@/components/footer";
import { Inter, Raleway, Open_Sans } from "next/font/google";
import clsx from "clsx";
import CategoryCard from "./components/categoryCard";

const raleway = Raleway({ subsets: ["latin"], display: "swap", weight: "700" });

const CATEGORIES = ["Newbie", "Junior", "Intermediate", "Advanced", "Guru"];

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center gap-4 bg-bg p-4">
      <h1
        className={clsx(
          "my-8 text-center text-4xl font-extrabold  text-primary md:my-24 md:text-6xl",
          raleway.className
        )}
      >
        Frontend Mentor Challenges
      </h1>
      <p className="max-w-100 text-center text-xl text-gray-100">
        <a
          className="underline"
          href="https://www.frontendmentor.io"
          target="_blank"
        >
          Frontend Mentor
        </a>{" "}
        is an incredible tool to develop your skills as a Frontend Developer, in
        it, you find designs according to your skills and you can practice
        developing them. These are my solutions to some of their challenges.
      </p>
      <div className="flex flex-row flex-wrap justify-center gap-2">
        {CATEGORIES.map((category) => (
          <CategoryCard key={`${category} card`} title={category} />
        ))}
      </div>
      <Footer />
    </main>
  );
}
