import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { gql } from "@apollo/client";
import client from "../../apollo-client";
import { ethers } from "ethers";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import connectProfilesContract from "../../utils/connectProfilesContract";
// import formatTimestamp from "../../utils/formatTimestamp";
import Alert from "../../components/Alert";
import {
  EmojiHappyIcon,
  TicketIcon,
  UsersIcon,
  LinkIcon,
  CurrencyDollarIcon,
  MapPinIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";

function Profile({ event }) {
  const { data: account } = useAccount();
  const [success, setSuccess] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(null);
  // const [currentTimestamp, setEventTimestamp] = useState(new Date().getTime());

  const router = useRouter();

  // function checkIfAlreadyRSVPed() {
  //   if (account) {
  //     for (let i = 0; i < event.rsvps.length; i++) {
  //       const thisAccount = account.address.toLowerCase();
  //       if (event.rsvps[i].attendee.id.toLowerCase() == thisAccount) {
  //         return true;
  //       }
  //     }
  //   }
  //   return false;
  // }

  async function handleDeleteProfile(profileId) {
    const profileContract = connectProfilesContract();
    console.log({ profileContract });
    if (profileContract) {
      const tx = await profileContract.disableProfile(profileId, {
        gasLimit: 900000,
      });
      console.log("Disabling profile...", tx.hash);
      await tx.wait();
      console.log("Disabling profile...", tx.hash);
      router.push("/");
    }
  }

  // const newRSVP = async () => {
  //   try {
  //     const rsvpContract = connectProfilesContract();

  //     if (rsvpContract) {
  //       const txn = await rsvpContract.createNewRSVP(event.id, {
  //         value: event.deposit,
  //         gasLimit: 300000,
  //       });
  //       setLoading(true);
  //       console.log("Minting...", txn.hash);

  //       await txn.wait();
  //       console.log("Minted -- ", txn.hash);
  //       setSuccess(true);
  //       setLoading(false);
  //       setMessage("Your RSVP has been created successfully.");
  //     } else {
  //       console.log("Error getting contract.");
  //     }
  //   } catch (error) {
  //     setSuccess(false);
  //     setMessage("Error!");
  //     setLoading(false);
  //     console.log(error);
  //   }
  // };

  if (!event) {
    return (
      <div className="lds-spinner ml-20">
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
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <Head>
        <title>{event.firstName - event.jobTitle} | Online CoWork</title>
        <meta name="description" content={event.firstName - event.jobTitle} />
        <link rel="icon" href="./images/favicon.png" />
      </Head>
      <section className="relative py-12">
        {loading && (
          <Alert
            alertType={"loading"}
            alertBody={"Please wait"}
            triggerAlert={true}
            color={"white"}
          />
        )}
        {success && (
          <Alert
            alertType={"success"}
            alertBody={message}
            triggerAlert={true}
            color={"palegreen"}
          />
        )}
        {success === false && (
          <Alert
            alertType={"failed"}
            alertBody={message}
            triggerAlert={true}
            color={"palevioletred"}
          />
        )}
        {/* <h6 className="mb-2">{formatTimestamp(event.eventTimestamp)}</h6> */}
        <h1 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-5xl mb-6 lg:mb-12">
          {event.firstName}
        </h1>
        <div className="flex flex-wrap-reverse lg:flex-nowrap">
          <div className="w-full pr-0 lg:pr-24 xl:pr-32">
            <div className="mb-8 w-full aspect-w-10 aspect-h-7 rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 focus-within:ring-indigo-500 overflow-hidden">
              {event.imageURL && (
                <Image src={event.imageURL} alt="event image" layout="fill" />
              )}
            </div>
            <p>{event.bio}</p>
          </div>
          <div className="max-w-xs w-full flex flex-col gap-4 mb-6 lg:mb-0">
            {/* {event.eventTimestamp > currentTimestamp ? (
              account ? (
                checkIfAlreadyRSVPed() ? (
                  <>
                    <span className="w-full text-center px-6 py-3 text-base font-medium rounded-full text-teal-800 bg-teal-100">
                      You have RSVPed! 🙌
                    </span>
                    <div className="flex item-center">
                      <LinkIcon className="w-6 mr-2 text-indigo-800" />
                      <a
                        className="text-indigo-800 truncate hover:underline"
                        href={event.link}
                      >
                        {event.link}
                      </a>
                    </div>
                  </>
                ) : (
                  <button
                    type="button"
                    className="w-full items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={newRSVP}
                  >
                    Donate for {ethers.utils.formatEther(event.deposit)} MATIC
                  </button>
                )
              ) : (
                <ConnectButton />
              )
            ) : (
              <span className="w-full text-center px-6 py-3 text-base font-medium rounded-full border-2 border-gray-200">
                Event has ended
              </span>
            )} */}
            <div className="flex item-center">
              <MapPinIcon className="w-6 mr-2" />
              <span className="truncate">
                {event.city}, {event.country}
              </span>
            </div>
            <div className="flex items-center">
              <LinkIcon className="w-6 mr-2" />
              <span className="truncate">
                <a
                  className="text-indigo-800 truncate hover:underline"
                  href={event.website}
                  target="_blank"
                  rel="noreferrer"
                >
                  {event.website}
                </a>
              </span>
            </div>

            <div className="flex items-center">
              <LinkIcon className="w-6 mr-2" />
              <span className="truncate">
                <a
                  className="text-indigo-800 truncate hover:underline"
                  href={event.facebookPage}
                  target="_blank"
                  rel="noreferrer"
                >
                  {event.facebookPage}
                </a>
              </span>
            </div>

            <div className="flex items-center">
              <LinkIcon className="w-6 mr-2" />
              <span className="truncate">
                <a
                  className="text-indigo-800 truncate hover:underline"
                  href={event.facebookGroup}
                  target="_blank"
                  rel="noreferrer"
                >
                  {event.facebookGroup}
                </a>
              </span>
            </div>

            <div className="flex items-center">
              <LinkIcon className="w-6 mr-2" />
              <span className="truncate">
                <a
                  className="text-indigo-800 truncate hover:underline"
                  href={event.twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  {event.twitter}
                </a>
              </span>
            </div>

            <div className="flex items-center">
              <LinkIcon className="w-6 mr-2" />
              <span className="truncate">
                <a
                  className="text-indigo-800 truncate hover:underline"
                  href={event.instagram}
                  target="_blank"
                  rel="noreferrer"
                >
                  {event.instagram}
                </a>
              </span>
            </div>

            <div className="flex items-center">
              <LinkIcon className="w-6 mr-2" />
              <span className="truncate">
                <a
                  className="text-indigo-800 truncate hover:underline"
                  href={event.pinterest}
                  target="_blank"
                  rel="noreferrer"
                >
                  {event.pinterest}
                </a>
              </span>
            </div>

            <div className="flex items-center">
              <LinkIcon className="w-6 mr-2" />
              <span className="truncate">
                <a
                  className="text-indigo-800 truncate hover:underline"
                  href={event.tiktok}
                  target="_blank"
                  rel="noreferrer"
                >
                  {event.tiktok}
                </a>
              </span>
            </div>

            <div className="flex items-center">
              <LinkIcon className="w-6 mr-2" />
              <span className="truncate">
                <a
                  className="text-indigo-800 truncate hover:underline"
                  href={event.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  {event.linkedin}
                </a>
              </span>
            </div>

            <div className="flex items-center">
              <LinkIcon className="w-6 mr-2" />
              <span className="truncate">
                <a
                  className="text-indigo-800 truncate hover:underline"
                  href={event.freebie}
                  target="_blank"
                  rel="noreferrer"
                >
                  {event.freebie}
                </a>
              </span>
            </div>

            <div className="flex items-center">
              <LinkIcon className="w-6 mr-2" />
              <span className="truncate">
                <a
                  className="text-indigo-800 truncate hover:underline"
                  href={event.otherLink}
                  target="_blank"
                  rel="noreferrer"
                >
                  {event.otherLink}
                </a>
              </span>
            </div>

            {/* <div className="flex item-center">
              <TicketIcon className="w-6 mr-2" />
              <span className="truncate">{event.website}</span>
            </div>
            <div className="flex item-center">
              <CurrencyDollarIcon className="w-6 mr-2" />
              <span className="truncate">{event.facebookPage}</span>
            </div>
            <div className="flex item-center">
              <CurrencyDollarIcon className="w-6 mr-2" />
              <span className="truncate">{event.facebookGroup}</span>
            </div>
            <div className="flex item-center">
              <CurrencyDollarIcon className="w-6 mr-2" />
              <span className="truncate">{event.twitter}</span>
            </div>
            <div className="flex item-center">
              <CurrencyDollarIcon className="w-6 mr-2" />
              <span className="truncate">{event.instagram}</span>
            </div>
            <div className="flex item-center">
              <CurrencyDollarIcon className="w-6 mr-2" />
              <span className="truncate">{event.pinterest}</span>
            </div>
            <div className="flex item-center">
              <CurrencyDollarIcon className="w-6 mr-2" />
              <span className="truncate">{event.tiktok}</span>
            </div>
            <div className="flex item-center">
              <CurrencyDollarIcon className="w-6 mr-2" />
              <span className="truncate">{event.linkedin}</span>
            </div>
            <div className="flex item-center">
              <CurrencyDollarIcon className="w-6 mr-2" />
              <span className="truncate">{event.freebie}</span>
            </div>
            <div className="flex item-center">
              <CurrencyDollarIcon className="w-6 mr-2" />
              <span className="truncate">{event.otherLink}</span>
            </div> */}

            {/* <div className="flex items-center">
              <EmojiHappyIcon className="w-10 mr-2" />
              <span className="truncate">
                Hosted by{" "}
                <a
                  className="text-indigo-800 truncate hover:underline"
                  href={`${process.env.NEXT_PUBLIC_TESTNET_EXPLORER_URL}address/${event.profileOwner}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {event.profileOwner}
                </a>
              </span>
            </div> */}

            <div className="flex items-center">
              <LinkIcon className="w-6 mr-2" />
              <span className="truncate">
                <a
                  className="text-indigo-800 truncate hover:underline"
                  href={event.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {event.country}
                </a>
              </span>
            </div>
            {/* {event?.toLowerCase() === account?.address?.toLowerCase() && (
              <div>
                <button
                  type="button"
                  className="w-full items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={() => handleDeleteProfile(event.id)}
                >
                  Delete Profile
                </button>
              </div>
            )} */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;

export async function getServerSideProps(context) {
  const { id } = context.params;
  console.log(id);

  const { data } = await client.query({
    query: gql`
      query Profile($id: String!) {
        profile(id: $id) {
          id
          profileID
          firstName
          city
          country
          website
          facebookPage
          facebookGroup
          twitter
          instagram
          pinterest
          tiktok
          linkedin
          freebie
          otherLink
          bio
          imageURL
        }
      }
    `,
    variables: {
      id: id,
    },
  });

  return {
    props: {
      event: data.profile,
    },
  };
}

export const config = {
  unstable_excludeFiles: ["public/**/*"],
};

{
  /* <div className="flex items-center">
<EmojiHappyIcon className="w-10 mr-2" />
<span className="truncate">
  Hosted by{" "}
  <a
    className="text-indigo-800 truncate hover:underline"
    href={`${process.env.NEXT_PUBLIC_TESTNET_EXPLORER_URL}address/${event.eventOwner}`}
    target="_blank"
    rel="noreferrer"
  >
    {event.eventOwner}
  </a>
</span>
</div> */
}
