import Head from "next/head";
import LotteryPageStats from "./LotteryPageStats";
import { GiPartyPopper } from "react-icons/gi";
import Link from "next/link";

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
                className="inline-flex items-center justify-center px-4 py-1 text-xs font-semibold leading-5 text-white transition-all duration-200 bg-pink-500 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
              >
                Donate to Lottery
              </button>
            </div>
          </div>

          <p className="mt-3 text-extralight text-gray-800sm:mt-5 sm:text-lg sm:mx-auto md:mt-5 md:text-xl lg:mx-0 lg:text-lg font-extralight">
            For virtual assistants, Etsy sellers, online yoga instructors,
            bloggers, online bookeepers, online freelancers and more! Get things
            done AND win funding for your online business with the Online CoWork
            Lottery!
            <br />
            <br />
            Our unique platform for women and non-binary people combines{" "}
            <strong>
              the productivity of a to-do list with the excitement of a lottery
            </strong>
            , giving you that extra dose of motivation that you need to succeed.
            <br />
            <br />
            Simply input a business task (such as 'get to inbox zero') that
            you'd like to get done, and pay a small fee of your choice to hold
            yourself accountable (we dare ya!). Not only will you have some
            accountability to get your pending tasks done and dusted, but this
            fee will also buy you a ticket to win valuable funds for your
            business in our weekly lottery.
            <br />
            <br />
            The more tasks you add (i.e. the more you commit to getting done),
            the more lottery entries you get, and the better your chances of
            winning!
            <br />
            <br />
            Plus, our platform is built on blockchain technology to ensure a
            fair and verifiably random lottery with no human interference. Don't
            miss out on this opportunity to grow your business and achieve your
            dreams!{" "}
            <Link href="/how-it-works" passHref>
              <span className="underline cursor-pointer">Learn More</span>
            </Link>
          </p>
        </div>
      </section>
      <section className="py-4 pb-0">
        <div className="flex items-center justify-center mt-2 mb-4  text-center bg-coworkblue p-1 bg-blend-soft-light rounded-lg">
          <h3 className="text-white text-xl">
            A huge congrats to last week's winner:
            0x02389745619387465kajshgd12341234 (~ USD 200.80){" "}
          </h3>{" "}
          <div className="text-white p-4">
            <GiPartyPopper size={"2em"} />
          </div>
        </div>
      </section>
      <section className="py-4">{children}</section>
    </div>
  );
}

// bg-gradient-to-r p-4 from-[#ff0080] to-[#2b3349]
