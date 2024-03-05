"use client";
import { FC, useState, useEffect } from "react";
import { Manrope } from "next/font/google";
import clsx from "clsx";
import Image from "next/image";

const font = Manrope({ subsets: ["latin"], display: "swap", weight: "800" });

/**
 * Color Palette
 * Primary:
 *   * Light Cyan: #CEE3E9
 *   * Neon Green: #53FFAA
 * Neutral:
 *   * Dark Blue: #202733
 *   * Dark Grayish Blue: #313A48
 */

const Page: FC = () => {
  const [advice, setAdvice] = useState<{ id: string; advice: string }>({
    id: "",
    advice: "",
  });

  const getAdvice = async () => {
    try {
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setAdvice(data.slip);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAdvice();
  }, []);

  return (
    <>
      {advice.id !== "" && (
        <div
          className={clsx(
            "flex size-full min-h-screenHome items-center justify-center bg-[#202733]",
            font.className
          )}
        >
          <div className=" flex max-h-[332px] w-11/12 max-w-[540px] flex-col items-center gap-4 rounded-2xl bg-[#313A48] px-4 pt-4">
            <h1 className="text-[13px] font-extrabold uppercase tracking-widest text-[#53FFAA]">
              Advice # {advice.id}
            </h1>
            <p className="text-center text-[20px] text-[#CEE3E9]">
              &quot;{advice.advice}&quot;
            </p>
            <Image
              src="/projects/junior/advice-generator/divider-mobile.svg"
              alt="divider"
              width={400}
              height={10}
            />
            <button
              className="relative bottom-[-2rem]  grid  items-center rounded-full bg-[#53FFAA] p-4"
              onClick={() => getAdvice()}
            >
              <Image
                src="/projects/junior/advice-generator/button.svg"
                alt="refresh"
                width={20}
                height={20}
              />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Page;
