import { FC } from "react";
import { Red_Hat_Display } from "next/font/google";
import clsx from "clsx";
import Image from "next/image";

const redHatDisplay = Red_Hat_Display({ subsets: ["latin"], display: "swap" });

type CardProps = {
  infoCard: {
    title: string;
    image: string;
    description: string;
    plan: string;
    price: number;
    time: string;
  };
};

const INFO_CARD = {
  title: "order summary",
  image: "/projects/newbie/order-summary/hero.svg",
  description:
    "You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!",
  plan: "annual plan",
  price: 59.99,
  time: "per year",
};

const Card: FC<CardProps> = ({ infoCard }) => {
  return (
    <div
      className={clsx(
        "flex h-5/6 w-11/12 max-w-[450px] flex-col  items-center justify-between gap-4 rounded-xl  bg-white shadow-lg md:h-[697px]",
        redHatDisplay.className
      )}
    >
      <Image
        src={infoCard.image}
        alt="illustration hero"
        className="rounded-t-xl"
        width={450}
        height={200}
      />
      <h1 className="text-xl font-extrabold capitalize text-indigo-600">
        {infoCard.title}
      </h1>
      <p className="w-10/12 text-center text-base md:w-9/12">
        {infoCard.description}
      </p>
      <div className="flex w-10/12 items-center justify-around gap-1 rounded-xl bg-gray-100 p-4">
        <Image
          src="/projects/newbie/order-summary/icon-music.svg"
          alt="music"
          width={50}
          height={50}
        />
        <div className=" flex grow flex-col items-start gap-1 px-2">
          <p className="font-extrabold capitalize text-indigo-600">
            {infoCard.plan}
          </p>
          <p className=" text-slate-700">
            ${infoCard.price} /{" "}
            <span className="text-base font-normal text-indigo-600">
              {infoCard.time}
            </span>
          </p>
        </div>
        <p className="cursor-pointer font-bold text-indigo-600 underline transition-all duration-300 ease-linear hover:text-purple-600">
          change
        </p>
      </div>
      <button className="w-10/12 rounded-xl bg-indigo-600 p-2 text-white shadow-md shadow-blue-700 transition-all duration-500 ease-in-out hover:bg-purple-600">
        Proceed to Payment
      </button>
      <button className="mb-12 w-10/12 p-2 font-extrabold text-indigo-600 hover:text-blue-700">
        Cancel Order
      </button>
    </div>
  );
};

const Page: FC = () => {
  return (
    <div className=" flex size-full min-h-screenWithFooter items-center justify-center bg-gray-200 bg-[url('/projects/newbie/order-summary/bg-mobile.svg')] bg-[length:100%_auto] bg-no-repeat md:bg-[url('/projects/newbie/order-summary/bg-desktop.svg')]">
      <Card infoCard={INFO_CARD} />
    </div>
  );
};

export default Page;
