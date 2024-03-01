import { FC } from "react";
import Image from "next/image";
import { Inter } from "next/font/google";
import clsx from "clsx";

const inter = Inter({ subsets: ["latin"], display: "swap", weight: "400" });

type CardProps = {
  info: {
    name: string;
    avatar: string;
    location: string;
    career: string;
    socialNetworks: {
      name: string;
      link: string;
    }[];
  };
};

const CARD_INFO = {
  name: "Jessica Randall",
  avatar: "/projects/newbie/social-links-profile/avatar.jpeg",
  location: "London, United Kingdom",
  career: "Front-end developer and avid reader",
  socialNetworks: [
    {
      name: "GitHub",
      link: "#",
    },
    {
      name: "Frontend Mentor",
      link: "#",
    },
    {
      name: "LinkedIn",
      link: "#",
    },
    {
      name: "Twitter",
      link: "#",
    },
    {
      name: "Instagram",
      link: "#",
    },
  ],
};

const Card: FC<CardProps> = ({ info }) => {
  return (
    <main
      className={clsx(
        "flex max-h-[611px] w-11/12 max-w-[384px] flex-col items-center gap-6   rounded-xl bg-gray-900 p-10 font-sans",
        inter.className
      )}
    >
      <Image
        src={info.avatar}
        className=" rounded-full"
        alt="avatar"
        height={100}
        width={100}
      />
      <div className="flex flex-col">
        <h1 className="text-2xl text-white">{info.name}</h1>
        <p className="text-sm font-bold text-primary">{info.location}</p>
      </div>

      <p className="text-sm font-thin text-white">&quot;{info.career}&quot;.</p>
      <div className="flex w-full flex-col gap-4">
        {info.socialNetworks.map((network, index) => (
          <a key={index} href={network.link} className="w-full">
            <div className="flex h-11 w-full items-center justify-center rounded-lg bg-gray-800 text-white hover:bg-primary hover:text-black">
              <p className="text-sm ">{network.name}</p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
};

const Page: FC = () => {
  return (
    <div className="flex size-full min-h-screenWithFooter items-center justify-center bg-black">
      <Card info={CARD_INFO} />
    </div>
  );
};

export default Page;
