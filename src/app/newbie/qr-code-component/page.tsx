"use client";
import { FC } from "react";
import clsx from "clsx";
import Image from "next/image";
import { Outfit } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "700"],
});

const CARD_INFO = {
  title: "Improve your front-end skills by building projects",
  description:
    "Scan the QR code to visit Frontend Mentor and take your coding skills to the next level",
  qrCode: "/projects/newbie/qr-code-component/qr.png",
};

interface CardProps {
  cardInfo: {
    qrCode: string;
    title: string;
    description: string;
  };
}

const THEME = {
  weight: {
    card: "max-w-[320px]",
  },
  height: {
    card: "max-h-[497px]",
  },
  color: {
    white: "#FFFFFF",
    lightGray: "#D6E2F0",
    grayishBlue: "#7B879D",
    darkBlue: "#1F3251",
  },
  fontSize: {
    description: "15px",
    title: "22px",
  },
};

const QRCard: FC<CardProps> = ({ cardInfo }) => {
  return (
    <div
      className={clsx(
        " flex h-5/6 w-11/12  flex-col items-center gap-4 rounded-xl bg-white p-4 ",
        THEME.weight.card,
        THEME.height.card
      )}
    >
      <Image
        src={cardInfo.qrCode}
        alt="QR code"
        className="rounded-xl"
        height={500}
        width={500}
      />
      <h1
        className={clsx(
          "text-center font-extrabold normal-case",
          "text-[" + THEME.color.darkBlue + "]",
          "text-[" + THEME.fontSize.title + "]"
        )}
      >
        {cardInfo.title}
      </h1>
      <p
        className={clsx(
          "mb-4 px-3 text-center text-base normal-case text-gray-600"
        )}
      >
        {cardInfo.description}
      </p>
    </div>
  );
};

const MyPage = () => {
  return (
    <div
      className={clsx(
        "flex size-full min-h-screenWithFooter items-center justify-center ",
        "bg-[" + THEME.color.lightGray + "]",
        outfit.className
      )}
    >
      <QRCard cardInfo={CARD_INFO} />
    </div>
  );
};

export default MyPage;
