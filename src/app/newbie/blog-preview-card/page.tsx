"use client";
import { FC, useState } from "react";
import clsx from "clsx";
import Image from "next/image";

type props = {
  cardData: {
    image: string;
    published: string;
    title: string;
    description: string;
    author: {
      avatar: string;
      name: string;
    };
  };
};

type buttonProps = {
  label: string;
};

const CARD_DATA = {
  image: "/projects/newbie/blog-preview-card/illustration.svg",
  published: "21 December 2023",
  title: "HTML & CSS foundations",
  description:
    "These languages are backbone for every website, defining structure, content and presentation",
  author: {
    avatar: "/projects/newbie/blog-preview-card/avatar.webp",
    name: "Greg Hooper",
  },
};

const Button: React.FC<buttonProps> = ({ label }) => {
  return (
    <button className="rounded-md bg-yellow-400 px-2 py-1 font-bold">
      {label}
    </button>
  );
};

const Card: React.FC<props> = ({ cardData }) => {
  const [hover, setHover] = useState<boolean>(false);
  return (
    <div
      className="flex h-4/6 max-h-[33rem] w-11/12 max-w-96 flex-col items-center justify-around gap-2 rounded-3xl border bg-white p-4 shadow-card hover:shadow-hover"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Image
        className="mb-4 rounded-xl"
        src={cardData.image}
        alt="card image"
        height={300}
        width={400}
      />
      <div className="flex h-3/6 w-full flex-col items-start justify-around gap-2">
        <Button label="Learning" />
        <p className="text-sm">Published {cardData.published}</p>
        <h1
          className={clsx(
            "text-xl font-extrabold uppercase hover:cursor-pointer",
            hover && "text-yellow-400"
          )}
        >
          {cardData.title}
        </h1>
        <p className="text-base text-gray-400">{cardData.description}</p>
        <div className="mt-4 flex items-center gap-2">
          <Image
            className="h-8 rounded-full"
            src={cardData.author.avatar}
            alt="author avatar"
            height={32}
            width={32}
          />
          <p className="text-sm font-bold">{cardData.author.name}</p>
        </div>
      </div>
    </div>
  );
};

const Page: FC = () => {
  return (
    <div className=" flex size-full min-h-screenHome items-center justify-center bg-yellow-300">
      <Card cardData={CARD_DATA} />
    </div>
  );
};

export default Page;
