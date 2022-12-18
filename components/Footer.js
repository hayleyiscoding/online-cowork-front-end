import Image from "next/image";
import Link from "next/link";
import { AiFillYoutube, AiOutlineTwitter } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="bg-coworkblue box-shadown-n">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <a
            href="https://onlinecowork.com"
            className="text-base text-gray-400 hover:text-gray-900 font-light"
          >
            Connect with us:
          </a>

          <a
            href="https://twitter.com/onlinecowork"
            className=" text-2xl text-gray-400 hover:text-gray-500 cursor-pointer"
          >
            <AiOutlineTwitter />
          </a>
          <a
            href="https://youtube.com/onlinecowork"
            className="text-2xl text-gray-400 hover:text-gray-500 cursor-pointer"
          >
            <AiFillYoutube />
          </a>
          <p className="text-md text-gray-400 hover:text-gray-500">
            {" "}
            info (at) onlinecowork.com
          </p>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">
            &copy; 2022 Online CoWork
          </p>
        </div>
      </div>
    </footer>
  );
}
