import { FC } from "react";
import { Montserrat, Fraunces } from "next/font/google";
import clsx from "clsx";
import Image from "next/image";

const montserrat = Montserrat({ subsets: ["latin"], display: "swap" });
const fraunces = Fraunces({ subsets: ["latin"], display: "swap" });

type CardProps = {
  info: {
    title: string;
    image: {
      mobile: string;
      desktop: string;
      alt: string;
    };
    type: string;
    description: string;
    priceOff: number;
    realPrice: number;
  };
};

const CARD_INFO = {
  title: "Gabriellle Essence Eau de Parfum",
  image: {
    mobile: "/projects/newbie/product-preview-card/product-mobile.jpg",
    desktop: "/projects/newbie/product-preview-card/product-desktop.jpg",
    alt: "perfume bottle",
  },
  type: "perfume",
  description:
    "A floral, solar and voluptuous interpretation composed by Oliver Polge, Perfumer-Creator for the house of CHANEL.",
  priceOff: 149.99,
  realPrice: 169.99,
};

const Card: FC<CardProps> = ({ info }) => {
  return (
    <div className="my-4 flex h-[75%] w-11/12 max-w-100 flex-col gap-1 rounded-xl  bg-white  md:h-[28rem] md:flex-row md:items-center md:justify-between">
      <picture className="size-full">
        <source srcSet={info.image.mobile} media="(max-width: 768px)" />
        <source srcSet={info.image.desktop} media="(min-width: 769px)" />
        <img
          src={info.image.desktop}
          alt={info.image.alt}
          className="h-full rounded-t-xl md:w-full md:rounded-l-xl md:rounded-r-none"
        />
      </picture>
      <div className="flex h-full flex-col justify-around gap-2 p-8 md:w-1/2">
        <p
          className={clsx(
            "uppercase leading-loose tracking-widest text-slate-600",
            montserrat.className
          )}
        >
          {info.type}
        </p>
        <h1 className={clsx("text-3xl font-extrabold", fraunces.className)}>
          {info.title}
        </h1>
        <p className={clsx("text-sm text-slate-600", montserrat.className)}>
          {info.description}
        </p>
        <div className="flex items-center gap-4">
          <p
            className={clsx(
              "text-4xl font-extrabold text-teal-500",
              fraunces.className
            )}
          >
            ${info.priceOff}
          </p>
          <p className="text-sm text-slate-600 line-through">
            ${info.realPrice}
          </p>
        </div>
        <button
          className={clsx(
            "flex h-12 items-center justify-center gap-2 rounded-xl bg-teal-500 p-2 text-sm font-bold text-white transition-all duration-300 ease-in-out hover:bg-emerald-500",
            montserrat.className
          )}
        >
          <Image
            src="/projects/newbie/product-preview-card/cart-icon.svg"
            alt="cart icon"
            width={16}
            height={16}
          />
          Add to cart
        </button>
      </div>
    </div>
  );
};

const Page: FC = () => {
  return (
    <div className="flex size-full min-h-screenHome items-center justify-center bg-red-50">
      <Card info={CARD_INFO} />
    </div>
  );
};

export default Page;
