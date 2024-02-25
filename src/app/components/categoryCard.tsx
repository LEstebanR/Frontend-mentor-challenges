import { FC } from "react";

type CardProps = {
  title: string;
};

const CategoryCard: FC<CardProps> = ({ title }) => {
  return (
    <div className="w-5/12 rounded-xl border border-black bg-secondary p-4 md:size-32">
      <p>{title}</p>
    </div>
  );
};

export default CategoryCard;
