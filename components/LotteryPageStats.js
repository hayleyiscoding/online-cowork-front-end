import React from "react";
// import { HiOutlineInformationCircle } from "react-icons/hi";
// import { GiPartyPopper } from "react-icons/gi";

const LotteryPageStats = ({ initialItems }) => {
  return (
    <div className="sm:py-16 lg:py-8 text-center">
      {/* <hr /> */}
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 box-shadow-n">
        <div className="grid grid-cols-4 sm:grid-cols-1 py-20 border-gray-200 xl:grid-cols-5">
          <div className="col-span-2 lg:col-span-1 pb-10 lg:pb-0 xl:py-6 px-10">
            <p className="text-md text-white font-normal">Tasks Added</p>
            <div className="inline-flex items-center mt-3">
              <p className="text-2xl font-bold text-coworkdarkbeige">500</p>
              {/* <span className="text-xs font-semibold text-green-500 ml-2.5 bg-green-100 rounded-full inline-flex items-center px-1.5 py-0.5">
                36%
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 ml-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 11l5-5m0 0l5 5m-5-5v12"
                  />
                </svg>
              </span> */}
            </div>
            <p className="mt-4 text-md font-light text-white">
              Since last draw
            </p>
          </div>

          <div className="col-span-2 lg:col-span-1 pb-10 px-10 border-gray-200 xl:pb-0 xl:py-6">
            <p className="text-md font-normal text-white">Total Tasks Added</p>
            <div className="inline-flex items-center mt-3">
              <p className="text-2xl font-bold text-coworkdarkbeige">
                {initialItems?.length}
              </p>
              {/* <span className="text-xs font-semibold text-red-500 ml-2.5 bg-red-100 rounded-full inline-flex items-center px-1.5 py-0.5">
                15%
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 ml-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 13l-5 5m0 0l-5-5m5 5V6"
                  />
                </svg>
              </span> */}
            </div>
            <p className="mt-4 text-md font-light text-white">Lifetime</p>
          </div>

          <div className="col-span-2 lg:col-span-1  py-10 xl:py-6  xl:px-10 ">
            <p className="text-md font-bold text-pink-500">This Week's Draw:</p>
            <div className="inline-flex items-center mt-3">
              <p className="text-4xl font-extrabold text-pink-500">~ $4532</p>
              {/* <span className="text-xs font-semibold text-green-500 ml-2.5 bg-green-100 rounded-full inline-flex items-center px-1.5 py-0.5">
                0.6%
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 ml-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 11l5-5m0 0l5 5m-5-5v12"
                  />
                </svg>
              </span> */}
            </div>
            <p
              className="mt-4 text-md font-light
             text-pink-500"
            >
              Equiv. 4230 MATIC
            </p>
          </div>

          <div className="col-span-2 lg:col-span-1 py-10 px-10  xl:py-6">
            <p className="text-md text-white font-normal">Online CoWorkers</p>
            <div className="inline-flex items-center mt-3">
              <p className="text-2xl font-bold text-coworkdarkbeige ">54</p>
              {/* <span className="text-xs font-semibold text-green-500 ml-2.5 bg-green-100 rounded-full inline-flex items-center px-1.5 py-0.5">
                19%
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 ml-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 11l5-5m0 0l5 5m-5-5v12"
                  />
                </svg>
              </span> */}
            </div>
            <p className="mt-4 text-md  text-white font-light">This draw</p>
          </div>

          <div className="col-span-2 pt-10 xl:col-span-1 xl:py-6   xl:px-10">
            <p className="text-md  text-white font-normal">Next Draw Date</p>
            <div className="inline-flex items-center mt-3">
              <p className="text-2xl font-bold text-coworkdarkbeige">
                27 May 2022
              </p>
              {/* <span className="text-xs font-semibold text-green-500 ml-2.5 bg-green-100 rounded-full inline-flex items-center px-1.5 py-0.5">
                21%
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-3 h-3 ml-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7 11l5-5m0 0l5 5m-5-5v12"
                  />
                </svg>
              </span> */}
            </div>
            <p className="mt-4 text-md  text-white font-light">
              1 Lucky Winner!
            </p>
          </div>
        </div>
      </div>
      {/* <hr /> */}
    </div>
  );
};

export default LotteryPageStats;
