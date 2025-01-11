import Link from "next/link";
import Image from "next/image";
import { BtnLink } from "../Button/BtnLink";

interface CardProps {
  img: string;
  altText: string;
  title: string;
  desc: string;
  labelBtn: string;
  url: string;
}
function Card(props: CardProps) {
  return (
    <div className="rounded overflow-hidden shadow-lg bg-white flex flex-col">
      <img
        className="w-full h-49 object-cover"
        src={props.img}
        alt={props.altText}
      />
      <div className=" px-2 py-4">
        <h2 className="text-xl font-bold mb-2">{props.title}</h2>
        <p className="text-gray-700 text-lg text-base">{props.desc}</p>
      </div>
      <div className="px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-800 transition mt-auto mb-3 w-28 ml-2">
        <BtnLink url={props.url} labelBtn={props.labelBtn} />
      </div>
    </div>
  );
}

export { Card };
