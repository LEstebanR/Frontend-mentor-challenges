import { FC } from "react";
import clsx from "clsx";
import Link from "next/link";

type Challenge = {
  level: string;
};

type CardProps = {
  title: string;
  challenges: Challenge[];
};

const DisabledCard: FC<{ title: string }> = ({ title }) => {
  return (
    <div className="flex size-32 flex-col items-center justify-center gap-2 rounded-xl border border-black bg-disabled p-4 text-gray-300 transition-all duration-300 ease-in-out">
      <p className="text-lg font-bold capitalize">{title}</p>
      <p className="text-center text-sm">Coming soon</p>
    </div>
  );
};

const CategoryCard: FC<CardProps> = ({ title, challenges }) => {
  return challenges.length != 0 ? (
    <Link href={`/${title}`}>
      <div
        className={clsx(
          "flex size-32 flex-col items-center justify-center gap-2 rounded-xl border border-black p-4 transition-all duration-300 ease-in-out",
          challenges.length
            ? "cursor-pointer bg-secondary hover:shadow-card"
            : "bg-disabled text-gray-300"
        )}
      >
        <p className="text-lg font-bold capitalize">{title}</p>
        {challenges.length ? (
          <div className="text-center">
            <p>completed:</p>
            <p>{challenges.length}</p>
          </div>
        ) : (
          <p className="text-center text-sm">Coming soon</p>
        )}
      </div>
    </Link>
  ) : (
    <DisabledCard title={title} />
  );
};

export default CategoryCard;
