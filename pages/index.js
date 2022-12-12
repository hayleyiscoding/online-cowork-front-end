import Head from "next/head";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
// import getRandomImage from "../utils/getRandomImage";
import { ethers } from "ethers";
import connectLotteryContract from "../utils/connectLotteryContract";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import Alert from "../components/Alert";
import { useRouter } from "next/router";
import LandingLottery from "../components/LandingLottery";
import { table, minifyItems } from "../utils/Airtable";
import { ItemsContext } from "../context/items";
import Item from "../components/Item";
import LotteryPageStats from "../components/LotteryPageStats";

export default function Home({ initialItems }) {
  const { data: account } = useAccount();

  const [success, setSuccess] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(null);

  //   const [task, setTask] = useState("");
  //   const [taskList, setTaskList] = useState([]);
  //   const [totalTasks, setTotalTasks] = useState(0);
  //   const [totalWeeklyTasks, setTotalWeeklyTasks] = useState(0);

  const [entranceFee, setEntranceFee] = useState("0");
  const [numberOfPlayers, setNumberOfPlayers] = useState("0");
  const [recentWinner, setRecentWinner] = useState("0");

  const router = useRouter();

  //   function handleSubmit(e) {
  //     e.preventDefault();

  // const body = {
  //   task: task,
  // };

  // try {
  // } catch (error) {
  //   alert(
  //     `Oops! Something went wrong. Please refresh and try again. Error ${error}`
  //   );
  // } finally {
  //   setTask("");
  // }

  // const createEvent = async () => {
  //   try {
  //     const lotteryContract = connectContract();

  //     if (lotteryontract) {
  //       // let deposit = ethers.utils.parseEther(refund);
  //       // let eventDateAndTime = new Date(`${eventDate} ${eventTime}`);
  //       // let eventTimestamp = eventDateAndTime.getTime();
  //       // let eventDataCID = cid;

  //       const txn = await lotteryContract.enterLottery(
  //         eventTimestamp,
  //         deposit,
  //         maxCapacity,
  //         eventDataCID,
  //         { gasLimit: 900000 }
  //       );

  //       setLoading(true);
  //       console.log("Minting...", txn.hash);
  //       let wait = await txn.wait();
  //       console.log("Minted -- ", txn.hash);

  //       setEventID(wait.events[0].args[0]);
  //       setSuccess(true);
  //       setLoading(false);
  //       setMessage("Woohoo! Your task has been created successfully. Now get it done! 🥳");
  //     } else {
  //       console.log("Error getting contract.");
  //     }
  //   } catch (error) {
  //     setSuccess(false);
  //     setMessage(`There was an error adding your task: ${error.message}`);
  //     setLoading(false);
  //     console.log(error);
  //   }
  // };
  //   }

  console.log({ initialItems });
  const { items, setItems } = useContext(ItemsContext);

  useEffect(() => {
    setItems(initialItems);
  }, [initialItems, setItems]);

  const [task, setTask] = useState("");
  const [amount, setAmount] = useState(1);
  const [email, setEmail] = useState("");
  const { addItem } = useContext(ItemsContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addItem({ task, email, amount: amount });
    setTask("");
    setAmount(1);
    setEmail("");
  };

  useEffect(() => {
    // disable scroll on <input> elements of type number
    document.addEventListener("wheel", (event) => {
      if (document.activeElement.type === "number") {
        document.activeElement.blur();
      }
    });
  });

  if (loading) {
    return (
      <LandingLottery>
        <div className="lds-spinner">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </LandingLottery>
    );
  }

  //   if (error) {
  //     return (
  //       <LandingLottery>
  //         <p>`Error! ${error.message}`</p>
  //       </LandingLottery>
  //     );
  //   }

  return (
    <LandingLottery>
      <section>
        <LotteryPageStats initialItems={initialItems} />
      </section>
      <section className="relative py-1">
        {!account && (
          <div>
            <section className="flex flex-col items-center p-6 mx-auto border w-1/3 text-center sm:w-12/12">
              <h3 className="text-xl font-bold mb-4">
                Grab a lottery ticket here by adding a business task!
              </h3>
              <p className="mb-4 text-sm font-light">
                Please connect your wallet to add a task. If you are not sure
                what a wallet is, please see our FAQ's{" "}
                <Link href="/how-it-works" passHref>
                  <p className="underline  mb-4 text-sm font-light">here.</p>
                </Link>
                NOTE: In order to limit spammers, registration is required in
                order to take part - please complete this quick application form{" "}
                <a
                  href="https://airtable.com/shrDASlmULZmdC0C1"
                  target="_blank"
                  rel="noreferrer"
                  className="underline"
                >
                  here
                </a>{" "}
                if this is your first time adding a task. Thank you!
              </p>
              <ConnectButton />
            </section>
            <section className="mt-12">
              <h3 className="text-xl font-bold py-1 text-center">
                Latest Tasks Being Completed by Women Who Work Online 🥳:
              </h3>
            </section>
            <section>
              <ul className="text-black py-3 w-2/3 mx-auto sm:w-12/12">
                {items &&
                  items?.map((item) => <Item key={item.id} item={item} />)}
              </ul>
            </section>
          </div>
        )}

        {account && !success && (
          <div>
            <form
              onSubmit={handleSubmit}
              className="space-y-8 divide-y divide-gray-200 pt-4 "
            >
              <div className="space-y-6 sm:space-y-5 border-2 w-3/6 py-4 mx-auto text-center ">
                <section className="flex flex-col items-center p-6 mx-auto text-center w-2/3 ">
                  <h3 className="text-xl font-bold mb-4">
                    Grab a lottery ticket here by adding a business task!
                  </h3>
                  <p className="mb-4 text-sm font-light">
                    Please connect your wallet to add a task. If you are not
                    sure what a wallet is, please see our FAQ's{" "}
                    <Link href="/how-it-works" passHref>
                      <p className="underline  mb-1 text-sm font-light">
                        here.
                      </p>
                    </Link>
                    NOTE: In order to limit spammers, registration is required
                    in order to take part - please complete this quick
                    application form{" "}
                    <a
                      href="https://airtable.com/shrDASlmULZmdC0C1"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      here
                    </a>{" "}
                    if this is your first time adding a task. Thank you!
                  </p>
                </section>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold text-gray-900"
                  >
                    Your email address:
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="block w-3/5 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md mx-auto my-4"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Your email address"
                  />
                  <label
                    htmlFor="task"
                    className="block text-sm font-bold text-gray-900"
                  >
                    Task that you would like to complete:
                  </label>
                  <input
                    id="task"
                    name="task"
                    type="text"
                    className="block w-3/5 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md mx-auto my-4"
                    required
                    onChange={(e) => setTask(e.target.value)}
                    placeholder="e.g. Write a blog about 10 tips for branding..."
                    maxLength={35}
                  />
                  <label
                    htmlFor="amount"
                    className="block text-sm font-bold text-gray-900"
                  >
                    Amount to Pay (in MATIC - minimum 1 MATIC):
                  </label>
                  <input
                    id="amount"
                    name="amount"
                    type="text"
                    className="block w-3/5 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md mx-auto my-4"
                    required
                    onChange={(e) => setAmount(e.target.value)}
                    placeholder="e.g. 5"
                    step={1}
                    min={1}
                  />

                  <div
                    className="flex justify-center
              "
                  >
                    {" "}
                    <button
                      type="submit"
                      className="ml-3 mt-4 inline-flex justify-center py-2 px-4 border-2 border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-black hover:bg-white hover:text-black hover:border-2 border-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                    >
                      Get it done!
                    </button>
                  </div>
                  <p className="p-8 font-xs w-1/2 mx-auto">
                    By adding your task you agree to our{" "}
                    <a
                      href="https://onlinecowork.com/terms-and-conditions"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      terms and conditions{" "}
                    </a>
                    and{" "}
                    <a
                      href="https://onlinecowork.com/privacy-policy"
                      target="_blank"
                      rel="noreferrer"
                      className="underline"
                    >
                      privacy policy
                    </a>
                  </p>
                </div>
              </div>
            </form>
            {/* <section className="mt-12">
              <h3 className="text-xl font-bold py-1 text-center">
                Latest Tasks Being Completed by Women Who Work Online 🥳:
              </h3>
            </section> */}
            <section className="w-2/3 mx-auto">
              <h3 className="text-xl font-bold py-1 text-center">
                Latest Tasks Being Completed by Women Who Work Online 🥳:
              </h3>
              <ul className="text-black py-3">
                {items &&
                  items?.map((item) => <Item key={item.id} item={item} />)}
              </ul>
            </section>
          </div>
        )}

        {/* {success && profileID && (
          <div>
            Success! Please wait a few minutes, then check out your event page{" "}
            <span className="font-bold">
              <Link href={`/profiles/${profileID}`}>here</Link>
            </span>
          </div>
        )} */}
      </section>

      {/* <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8 py-12"
      >
        {filteredProfiles.map((profile) => (
          <li key={profile.id}>
            <ProfileCard
              id={profile.id}
              firstName={profile.firstName}
              // eventTimestamp={event.eventTimestamp}
              imageURL={profile.imageURL}
              // eventCost={event.cost}
              jobTitle={profile.jobTitle}
            />
          </li>
        ))}
      </ul> */}
    </LandingLottery>
  );
}

export async function getServerSideProps(context) {
  try {
    const items = await table
      .select({
        // Selecting the first 20 records in Grid view:
        maxRecords: 20,
        view: "Grid view",
      })
      .firstPage();
    return {
      props: {
        initialItems: minifyItems(items),
      },
    };
  } catch (error) {
    console.log(error);
    return {
      props: {
        err: "Something went wrong 😕",
      },
    };
  }
}
