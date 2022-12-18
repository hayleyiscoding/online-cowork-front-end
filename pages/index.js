import { useState, useEffect, useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ethers } from "ethers";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import {
  useAccount,
  useBalance,
  useNetwork,
  useContract,
  useProvider,
  useSigner,
} from "wagmi";
import { toast } from "react-toastify";
import { ItemsContext } from "../context/items";
import { ProfilesContext } from "../context/profiles";
import { LotteryContext } from "../context/lottery";
import LandingLottery from "../components/LandingLottery";
import LotteryPageStats from "../components/LotteryPageStats";
import Item from "../components/Item";
import SEO from "../components/SEO";
import Alert from "../components/Alert";
import { minifyItems, profileAirtable, taskAirtable } from "../utils/airtable";
// import getRandomImage from "../utils/getRandomImage";
import lotteryABI from "../constants/lotteryABI.json";

export default function Home({ tasks, profiles }) {
  const { data: account } = useAccount();
  const { data: balance } = useBalance({
    addressOrName: account?.address,
  });
  const { activeChain, switchNetwork } = useNetwork();
  const provider = useProvider();
  const contract = useContract({
    addressOrName: process.env.NEXT_PUBLIC_LOTTERY_CONTRACT,
    contractInterface: lotteryABI,
    signerOrProvider: provider,
  });
  const { data: signer } = useSigner();

  const [success, setSuccess] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(null);

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

  const { items, setItems } = useContext(ItemsContext);
  const { setProfiles } = useContext(ProfilesContext);
  const {
    lotteryContract,
    setLotteryContract,
    lotteryState,
    setLotteryState,
    getLotteryState,
    listenLotteryEvents,
  } = useContext(LotteryContext);

  const [task, setTask] = useState("");
  const [amount, setAmount] = useState(0);
  const [spin, setSpin] = useState(false);
  const { addItem } = useContext(ItemsContext);

  const handleSubmit = async () => {
    if (task === "") toast.error("Please filled a new Task name!");
    else if (amount === 0)
      toast.error("Please add Task with at least 1 Matic!");
    else {
      setSpin(true);
      try {
        const lotteryContractWithSigner = lotteryContract.connect(signer);
        await lotteryContractWithSigner.enterLottery({
          value: ethers.utils.parseEther(String(amount)),
        });
        await addItem({
          task,
          amount: amount,
          address: account?.address,
        });
        setTask("");
        setAmount(0);
        setSpin(false);
      } catch (error) {
        setSpin(false);
        toast.warn("Something went wrong!");
        console.log(error);
      }
    }
  };

  useEffect(() => {
    setItems(tasks);
    setProfiles(profiles);
  }, [tasks, setItems, profiles, setProfiles]);

  useEffect(() => {
    if (activeChain === undefined) toast.info("Please connect your wallet!");
    else if (activeChain.id !== 80001 && activeChain.id !== 137) {
      toast.warn("Please switch to Polygon network!");
      switchNetwork(80001);
    } else
      toast.success(`Your wallet is connected to ${activeChain.name} network!`);
  }, [activeChain]);

  useEffect(() => {
    if (contract && account && activeChain) setLotteryContract(contract);
    if (!account) {
      setLotteryContract(null);
      setLotteryState(null);
    }
  }, [account, contract]);

  useEffect(() => {
    if (lotteryContract) {
      listenLotteryEvents();
      getLotteryState();
    }
  }, [lotteryContract]);

  useEffect(() => {
    console.log("lotteryState:", lotteryState);
  }, [lotteryState]);

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
      <SEO>
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
      </SEO>
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
    <SEO>
      <LandingLottery>
        <LotteryPageStats initialItems={tasks} />
        <section className="relative py-8">
          {!account && (
            <div>
              <section className="flex flex-col items-center p-16 mx-auto border w-3/6 text-center sm:w-12/12 shadow-xl mt-8">
                <h3 className="text-4xl font-bold mb-8">
                  Connect your wallet here to add a task to enter the lottery!
                </h3>
                <p className="mb-10 text-sm font-light">
                  1) Please connect your wallet to add a task. If you are not
                  sure what a wallet is, please see our FAQ&apos;s{" "}
                  <Link href="/how-it-works" passHref>
                    <p className="underline  mb-4 text-sm font-light inline-block">
                      here.
                    </p>
                  </Link>
                  <br />
                  2) In order to limit spammers, registration is required in
                  order to take part - please also complete this quick
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
                <ConnectButton />
              </section>
              <h3 className="text-4xl font-bold pt-12 pb-4 text-center">
                Latest Tasks:
              </h3>
              <ul className="text-black py-3 mx-auto sm:w-12/12 grid grid-cols-1 lg:grid-cols-3 ">
                {items &&
                  items?.map((item) => <Item key={item.id} item={item} />)}
              </ul>
            </div>
          )}

          {account && !success && (
            <div>
              <section className="space-y-8 divide-y divide-gray-200 pt-4">
                <div className="space-y-6 sm:space-y-5  w-4/6 py-4 mx-auto text-center shadow-xl">
                  <section className="flex flex-col items-center p-6 mx-auto text-center w-9/12">
                    <h3 className="font-bold mb-8 mt-5 text-4xl leading-normal">
                      Grab a lottery ticket here by adding a business task!
                    </h3>
                    <p className="font-light text-sm">
                      If you are not sure how this works, click{" "}
                      <Link href="/how-it-works" passHref>
                        <p className="underline  mb-4 text-sm font-light inline-block">
                          here.
                        </p>
                      </Link>
                      <br />
                      <strong>TASK: </strong>This is the task that you&apos;d
                      like to complete.
                      <br />
                      <br />
                      <strong>AMOUNT: </strong>This is the amount of money (in
                      MATIC) that you wish to pay in order to make a contract
                      with yourself to complete your task. This amount needs to
                      be a minimum of 1 MATIC. Please note that you WONT get
                      this money back.
                      <br />
                      <br />
                      This fee will buy you a lottery ticket/s. And one lucky
                      random winner will win the prize pool each week! NOTE: 1
                      MATIC = 1 LOTTERY TICKET. This means that if you pay 10
                      MATIC to complete your task, you will get 10 entries into
                      the draw.
                    </p>
                  </section>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
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
                      value={task}
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
                      type="number"
                      className="block w-1/5 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md mx-auto my-4"
                      required
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="e.g. 5"
                      step={1}
                      min={0}
                      max={balance.formatted}
                      value={amount}
                    />

                    <div
                      className="flex justify-center
              "
                    >
                      {" "}
                      <button
                        type="button"
                        onClick={handleSubmit}
                        disabled={spin}
                        className="ml-3 mt-4 inline-flex justify-center py-2 px-4 border-2 border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-black hover:bg-white hover:text-black hover:border-2 border-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                      >
                        {spin && (
                          <svg
                            aria-hidden="true"
                            className="mr-2 w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-white"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="currentColor"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentFill"
                            />
                          </svg>
                        )}
                        Get it done!
                      </button>
                    </div>
                    <p className="p-8 text-xs w-5/12 mx-auto font-extralight">
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
              </section>
              <h3 className="text-4xl font-bold pt-12 pb-4 text-center">
                Latest Tasks:
              </h3>
              <ul className="text-black py-3 mx-auto sm:w-12/12 grid grid-cols-1 lg:grid-cols-3 ">
                {items &&
                  items?.map((item) => <Item key={item.id} item={item} />)}
              </ul>
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
    </SEO>
  );
}

export async function getServerSideProps(context) {
  try {
    const items = await taskAirtable
      .select({
        // Selecting the first 20 records in Grid view:
        maxRecords: 20,
        view: "Grid view",
      })
      .firstPage();
    const profiles = await profileAirtable
      .select({
        // Selecting the first 20 records in Grid view:
        maxRecords: 50,
        view: "Grid view",
      })
      .all();
    return {
      props: {
        tasks: minifyItems(items),
        profiles: minifyItems(profiles),
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
