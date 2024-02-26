import { FC } from "react";
import clsx from "clsx";

type Challenge = {
  level: string;
};

type CardProps = {
  title: string;
  challenges: Challenge[];
};

const CategoryCard: FC<CardProps> = ({ title, challenges }) => {
  return (
    <div
      className={clsx(
        "flex w-5/12 flex-col items-center  justify-center gap-2 rounded-xl border border-black p-4 transition-all duration-300 ease-in-out md:size-32",
        challenges.length
          ? "cursor-pointer bg-secondary hover:shadow-card"
          : "bg-disabled"
      )}
    >
      <p className="text-lg font-bold">{title}</p>
      {challenges.length ? (
        <div className="text-center">
          <p>completed:</p>
          <p>{challenges.length}</p>
        </div>
      ) : (
        <p className="text-center text-sm">Coming soon</p>
      )}
    </div>
  );
};

export default CategoryCard;
