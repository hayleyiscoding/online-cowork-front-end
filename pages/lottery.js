import { useState, useEffect, useContext } from "react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { ethers } from "ethers";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { minifyItems, profileAirtable, taskAirtable } from "../utils/airtable";
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
import Item from "../components/Item";
import LotteryPageStats from "../components/LotteryPageStats";
import lotteryABI from "../constants/lotteryABI.json";
import Alert from "../components/Alert";

export default function Lottery({ tasks, profiles }) {
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

  const router = useRouter();

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
    if (task === "") toast.error("Please add a Task!");
    else if (amount === 0)
      toast.error("Please add a task with at least 1 Matic!");
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
    <>
      <Head>
        <title>Online CoWork Lottery</title>
        <meta
          name="description"
          content="A lottery to help get funding to women in business"
        />
      </Head>
      <LandingLottery>
        <LotteryPageStats initialItems={tasks} />
        <section className="relative py-8">
          {!account && (
            <div>
              <section className="flex flex-col items-center p-16 mx-auto border lg:w-6/12 text-center sm:w-12/12 shadow-xl mt-8 box-shadow-n">
                <h3 className="text-4xl font-normal mb-8 text-coworkdarkbeige leading-relaxed">
                  Connect your wallet here to add a task to enter the lottery ⬇
                </h3>
                <p className="mb-7 text-sm font-light text-white">
                  1) Is this your first time adding a task? Please note that
                  registration is required for participation in this lottery -
                  please create your profile{" "}
                  <span className="underline">
                    <Link href="/create-profile" rel="noreferrer">
                      here
                    </Link>
                  </span>
                  . We aim to approve your profile within 72 hours. Thank you!
                  <br />
                  <br />
                  2) Please connect your wallet to add a task. If you are not
                  sure what a wallet is, please see our FAQ&apos;s{" "}
                  <Link href="/how-it-works" passHref>
                    <p className="underline  mb-4 text-sm font-light inline-block">
                      here
                    </p>
                  </Link>
                  .
                </p>
                <ConnectButton />
              </section>
              {/* <h3 className="text-4xl font-bold pt-12 mt-12 pb-16 text-center text-white">
                Latest Tasks:
              </h3>

              <ul className="text-black py-3 mx-auto sm:w-12/12 grid grid-cols-1 lg:grid-cols-3 box-shadow-n ">
                {items &&
                  items?.map((item) => <Item key={item.id} item={item} />)}
              </ul> */}
            </div>
          )}
          {account && !success && (
            <div>
              <form
                onSubmit={handleSubmit}
                className="space-y-8 divide-y divide-gray-200 pt-4"
              >
                <div className="space-y-6 sm:space-y-2  lg:w-4/6 py-4 mx-auto text-center shadow-xl box-shadow-n">
                  <section className="flex flex-col items-center lg:p-6 py-6 mx-auto text-center w-9/12">
                    <h3 className="font-bold mb-8 mt-5 text-4xl leading-normal text-coworkdarkbeige">
                      Grab a lottery ticket here by adding a business task ⬇
                    </h3>
                    <p className="font-light text-white text-sm">
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
                      MATIC to complete one task, you will get 10 entries into
                      the draw for that task.
                    </p>
                  </section>
                  <div className="mt-1 sm:mt-0 sm:col-span-2">
                    <label
                      htmlFor="task"
                      className="block text-sm text-coworkdarkbeige font-bold "
                    >
                      Task that you would like to complete:
                    </label>
                    <input
                      id="task"
                      name="task"
                      type="text"
                      className="block w-3/5 shadow-sm focus:ring-coworkdarkbeige focus:border-coworkdarkbeige sm:text-sm border border-gray-300 rounded-md mx-auto my-4"
                      required
                      onChange={(e) => setTask(e.target.value)}
                      placeholder="e.g. Write a blog about 10 tips for branding..."
                      maxLength={35}
                      value={task}
                    />
                    <label
                      htmlFor="amount"
                      className="block text-sm font-bold text-coworkdarkbeige"
                    >
                      Amount to Pay (in MATIC - minimum 1 MATIC):
                    </label>
                    <input
                      id="amount"
                      name="amount"
                      type="number"
                      className="block w-1/5 shadow-sm focus:ring-coworkdarkbeige focus:coworkdarkbeige sm:text-sm border border-gray-300 rounded-md mx-auto my-4"
                      required
                      onChange={(e) => setAmount(e.target.value)}
                      placeholder="e.g. 5"
                      step={1}
                      min={1}
                      value={amount}
                      max={parseInt(balance.formatted * 10)}
                    />

                    <div
                      className="flex justify-center
              "
                    >
                      {" "}
                      <button type="submit" className="btn btn-primary py-12">
                        Get it done!
                      </button>
                    </div>
                    <p className="p-8 text-xs lg:w-5/12 mx-auto font-extralight text-coworkdarkbeige">
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
            </div>
          )}
          ;
          <section>
            <div className="w-2/3 mx-auto pt-6">
              <h3 className="text-4xl text-white font-bold py-4 pb-10 mt-12 mb-6 text-center mx-auto">
                Latest Tasks:
              </h3>
            </div>
            <ul className="text-black py-3 grid grid-cols-1 lg:grid-cols-1 ">
              {items &&
                items?.map((item) => <Item key={item.id} item={item} />)}
            </ul>
          </section>
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
    </>
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
