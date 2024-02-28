import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

type ChallengeCardProps = {
  title: string;
  url: string;
  image: string;
  date: Date;
};

const ChallengeCard: FC<ChallengeCardProps> = ({ title, url, image, date }) => {
  return (
    <Link href={url} className="w-5/6 max-w-60">
      <div className=" rounded-xl border border-black bg-white transition-all duration-300 ease-in-out hover:shadow-card">
        <div className="w-full  overflow-hidden rounded-lg p-2">
          <div className="size-full overflow-hidden rounded-lg">
            <Image
              src={image}
              alt={title}
              sizes="100vw"
              width={100}
              height={100}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              className="aspect-square rounded-lg transition-transform duration-300 ease-in-out hover:scale-150"
            />
          </div>
        </div>
        <p className="px-2 text-xl font-bold">{title}</p>
        <hr className="my-2" />
        <p className="p-2 text-right text-sm italic">
          {date.toLocaleDateString()}
        </p>
      </div>
    </Link>
  );
};

export default ChallengeCard;
