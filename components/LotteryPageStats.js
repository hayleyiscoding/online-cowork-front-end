import React from "react";
// import { HiOutlineInformationCircle } from "react-icons/hi";
// import { GiPartyPopper } from "react-icons/gi";

const LotteryPageStats = () => {
  return (
    <div className="py-4 sm:py-16 lg:py-4">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 py-8 border-t border-b border-gray-200 xl:grid-cols-5">
          <div className="pb-10 lg:pb-0">
            <p className="text-sm font-medium text-gray-600">Tasks Completed</p>
            <div className="inline-flex items-center mt-3">
              <p className="text-2xl font-bold text-gray-900">2195</p>
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
            <p className="mt-4 text-xs font-medium text-gray-500">
              Since last draw
            </p>
          </div>

          <div className="pb-10 pl-10 border-gray-200 xl:pb-0 xl:border-l">
            <p className="text-sm font-medium text-gray-600">Total Tasks</p>
            <div className="inline-flex items-center mt-3">
              <p className="text-2xl font-bold text-gray-900">254000</p>
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
            <p className="mt-4 text-xs font-medium text-gray-500">Lifetime</p>
          </div>

          <div className="py-10 border-t xl:border-l xl:py-0 lg:border-gray-200 xl:pl-10 xl:border-t-0">
            <p className="text-sm font-medium text-gray-600">
              Up for grabs this week:
            </p>
            <div className="inline-flex items-center mt-3">
              <p className="text-2xl font-bold text-pink-500">~ USD 4532</p>
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
            <p className="mt-4 text-xs font-medium text-gray-500">
              Equiv. 4230 MATIC
            </p>
          </div>

          <div className="py-10 pl-10 border-t border-gray-200 xl:py-0 xl:border-l xl:border-t-0">
            <p className="text-sm font-medium text-gray-600">
              Online CoWorkers
            </p>
            <div className="inline-flex items-center mt-3">
              <p className="text-2xl font-bold text-gray-900">54</p>
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
            <p className="mt-4 text-xs font-medium text-gray-500">
              Participating in this draw
            </p>
          </div>

          <div className="col-span-2 pt-10 border-t xl:col-span-1 xl:py-0 xl:border-l xl:border-t-0 xl:border-gray-200 xl:pl-10">
            <p className="text-sm font-medium text-gray-600">Next draw date</p>
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
            <p className="mt-4 text-xs font-medium text-gray-500">
              2 Lucky Winners!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LotteryPageStats;
