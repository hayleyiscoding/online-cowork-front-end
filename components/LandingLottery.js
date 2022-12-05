import Head from "next/head";
import LotteryPageStats from "./LotteryPageStats";
import { GiPartyPopper } from "react-icons/gi";

export default function LandingLottery({ children }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Online CoWork</title>
        <meta
          name="description"
          content="The virtual office for women who work online"
        />
      </Head>
      <section className="pt-16 pb-4">
        <div className="w-full md:w-11/12 text-left">
          <div className="flex items-center">
            <h1 className="text-4xl font-light tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              <span>The Online CoWork </span>
              <span className="text-gray-300">Lottery!</span>
            </h1>
            <div className=" mx-6 text-white my-5 ml-10">
              <button
                type="button"
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-pink-500 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
              >
                Donate to Lottery
              </button>
            </div>
          </div>

          <p className="mt-3 text-extralight text-gray-800sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-extralight">
            Add a task that you've been procrastinating about completing and an
            amount that will push you to complete it - and get entered into our
            weekly draw! 🥳 One task = one lottery ticket. Helping women to get
            funding for their online businesses. Yes, we looking at you -
            virtual assistants, online yoga instructors, health coaches,
            bloggers, Etsy sellers and more!
          </p>
        </div>
      </section>
      <section className="py-4">
        <div className="flex items-center justify-center mt-2 mb-8  text-center bg-coworkblue p-4 bg-blend-soft-light">
          <h3 className="text-white text-xl">
            A huge congrats to last week's winner:
            0x02389745619387465kajshgd12341234 (~ USD 200.80){" "}
          </h3>{" "}
          <div className="text-white p-4">
            <GiPartyPopper size={"2em"} />
          </div>
        </div>

        <LotteryPageStats />
      </section>
      <section className="py-4">{children}</section>
    </div>
  );
}

// bg-gradient-to-r p-4 from-[#ff0080] to-[#2b3349]
