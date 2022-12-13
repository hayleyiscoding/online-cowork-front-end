import React from "react";
// import { HiOutlineInformationCircle } from "react-icons/hi";
// import { GiPartyPopper } from "react-icons/gi";

const LotteryPageStats = ({ initialItems }) => {
  return (
    <div className="sm:py-16 lg:py-1 ">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 py-5 border-gray-200 xl:grid-cols-5">
          <div className="pb-10 lg:pb-0 xl:py-6">
            <p className="text-md text-gray-600 font-light">Tasks Added</p>
            <div className="inline-flex items-center mt-3">
              <p className="text-2xl font-bold text-gray-900">500</p>
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
            <p className="mt-4 text-md font-light text-gray-500">
              Since last draw
            </p>
          </div>

          <div className="pb-10 pl-10 border-gray-200 xl:pb-0 xl:border-l xl:py-6">
            <p className="text-md font-light text-gray-600">
              Total Tasks Added
            </p>
            <div className="inline-flex items-center mt-3">
              <p className="text-2xl font-bold text-gray-900">
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
            <p className="mt-4 text-md font-light text-gray-500">Lifetime</p>
          </div>

          <div className="py-10 border-t xl:py-6 shadow-xl lg:border-gray-200 xl:pl-10 xl:border-t-0">
            <p className="text-md font-light text-pink-500">
              Up For Grabs This Week:
            </p>
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

          <div className="py-10 pl-10 border-t border-gray-200 xl:border-t-0 xl:py-6">
            <p className="text-md text-gray-600 font-light">Online CoWorkers</p>
            <div className="inline-flex items-center mt-3">
              <p className="text-2xl font-bold text-gray-900 ">54</p>
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
            <p className="mt-4 text-md  text-gray-500 font-light">
              Participating in this draw
            </p>
          </div>

          <div className="col-span-2 pt-10 border-t xl:col-span-1 xl:py-6 xl:border-l xl:border-t-0 xl:border-gray-200 xl:pl-10">
            <p className="text-md  text-gray-600 font-light">Next Draw Date</p>
            <div className="inline-flex items-center mt-3">
              <p className="text-2xl font-bold text-gray-900">27 May 2022</p>
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
            <p className="mt-4 text-md  text-gray-500 font-light">
              1 Lucky Winner!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LotteryPageStats;
