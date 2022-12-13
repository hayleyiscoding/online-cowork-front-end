export default function LotteryPageStats({ initialItems }) {
  return (
    <div className="max-w-5xl mx-auto mt-16 text-center font-nunito bg-white">
      <div className="grid grid-cols-3 ">
        <div className="py-4 pr-6 lg:pr-16 sm:py-12">
          <p className="text-3xl font-normal sm:text-4xl lg:text-5xl xl:text-6xl text-center">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 ">
              102
            </span>
          </p>
          <p className="mt-3 text-xs font-normal text-black sm:text-base lg:text-lg">
            Tasks Added This Week
          </p>
          <p className="text-3xl font-normal sm:text-4xl lg:text-5xl xl:text-6xl pt-40">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 ">
              {initialItems?.length}
            </span>
          </p>
          <p className="mt-3 text-xs font-normal text-black sm:text-base lg:text-lg">
            Total Number of Tasks Added
          </p>
        </div>

        <div className="px-6 py-6  sm:py-12 lg:px-16 bg-white shadow-2xl">
          <h2 className="mt-3 text-3xl font-normal text-black sm:text-xl lg:text-3xl pb-16">
            UP FOR GRABS THIS WEEK 🔥
          </h2>
          <p className="text-4xl text-center font-normal sm:text-5xl lg:text-6xl xl:text-7xl ">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-[#ff0080]">
              132 Matic
              <br />
              <span className="text-xl mt-4">Approx. US$171.76</span>
            </span>
          </p>
          <div className="flex items-center justify-center mx-6 text-white mt-10 ">
            <button
              type="button"
              className="inline-flex items-center justify-center px-6 py-3 text-sm font-semibold leading-5 text-white transition-all duration-200 bg-black border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 hover:bg-indigo-500"
            >
              Donate to Lottery
            </button>
          </div>
          <div className="p-1 pt-5 mb-5 ml-2 text-center underline text-black">
            How it Works
            {/* <HiOutlineInformationCircle color={"white"} size={"1.5em"} /> */}
          </div>
        </div>

        <div className="py-4 pl-6 lg:pl-16 sm:py-12">
          <p className="text-3xl font-normal sm:text-4xl lg:text-5xl xl:text-6xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 ">
              57
            </span>
          </p>
          <p className="mt-3 text-xs font-normal text-black sm:text-base lg:text-lg">
            Number of Online CoWorkers
          </p>

          <p className="text-3xl font-normal sm:text-4xl lg:text-5xl xl:text-6xl pt-40">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-purple-500 ">
              1
            </span>
          </p>
          <p className="mt-3 text-xs font-normal text-black sm:text-base lg:text-lg">
            Total Number of Winners
          </p>
        </div>
      </div>
    </div>
  );
}
