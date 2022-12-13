import Head from "next/head";
import Link from "next/link";
import { useState, useEffect, useContext } from "react";
// import getRandomImage from "../utils/getRandomImage";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import Alert from "../components/Alert";
import { useRouter } from "next/router";
import { table, minifyProfiles } from "../utils/AirtableProfiles";
import { ProfilesContext } from "../context/profiles";

export default function CreateProfile({ initialProfiles }) {
  const { data: account, isConnected } = useAccount();
  const [success, setSuccess] = useState(null);
  const [message, setMessage] = useState(null);
  const [loading, setLoading] = useState(null);

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [websiteLink, setWebsiteLink] = useState("");
  const [facebookLink, setFacebookLink] = useState("");
  const [facebookGroupLink, setFacebookGroupLink] = useState("");
  const [twitterLink, setTwitterLink] = useState("");
  const [instagramLink, setInstagramLink] = useState("");
  const [pinterestLink, setPinterestLink] = useState("");
  const [tiktokLink, setTiktokLink] = useState("");
  const [linkedinLink, setLinkedinLink] = useState("");
  const [freebieLink, setFreebieLink] = useState("");
  const [otherLink, setOtherLink] = useState("");
  const [bio, setBio] = useState("");
  const [coverImage, setCoverImage] = useState(null);

  const router = useRouter();

  const { addProfile, profiles, setProfiles } = useContext(ProfilesContext);

  useEffect(() => {
    setProfiles(initialProfiles);
  }, [initialProfiles, setProfiles]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await addProfile({
      firstName,
      email,
      walletAddress: account?.address,
      jobTitle,
      city,
      country,
      websiteLink,
      facebookLink,
      facebookGroupLink,
      twitterLink,
      instagramLink,
      pinterestLink,
      tiktokLink,
      linkedinLink,
      freebieLink,
      otherLink,
      bio,
    });
    setFirstName("");
    setEmail("");
    setJobTitle("");
    setCity("");
    setCountry("");
    setWebsiteLink("");
    setFacebookLink("");
    setFacebookGroupLink("");
    setTwitterLink("");
    setInstagramLink("");
    setPinterestLink("");
    setTiktokLink("");
    setLinkedinLink("");
    setFreebieLink("");
    setOtherLink("");
    setBio("");
    // task, email, amount: amount
  };

  useEffect(() => {
    // disable scroll on <input> elements of type number
    document.addEventListener("wheel", (event) => {
      if (document.activeElement.type === "number") {
        document.activeElement.blur();
      }
    });
  });

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <Head>
        <title>Create Your Profile | Online CoWork</title>
        <meta name="description" content="Create your profile" />
      </Head>
      <section className="relative py-12">
        {/* {loading && (
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
        )} */}

        {!success && (
          <div>
            <h1 className="text-3xl tracking-tight font-extralight text-gray-900 sm:text-4xl md:text-5xl mb-4">
              Create Your Profile
            </h1>
            <p className="font-light text-base pr-40 pb-8 pt-8">
              Below you will find a form to create your profile. Once you have
              created your added your details below, we will approve it within
              72 hours. If approved, you may participate in the Online CoWork
              Lottery! Please keep an eye on your email (and spam folder!)
            </p>
          </div>
        )}

        {!isConnected && !success && (
          <form
            onSubmit={handleSubmit}
            className="space-y-8 divide-y divide-gray-200"
          >
            <div className="space-y-6 sm:space-y-5">
              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  First Name{" "}
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Add your first name. Please try to use your real first name
                    as it will be associated with your business.
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="first-name"
                    name="first-name"
                    type="text"
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                    required
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="job-title"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Email{" "}
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Write your email address
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="email"
                    name="email"
                    type="text"
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="job-title"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Job Title{" "}
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    e.g. Social Media Manager, Etsy Seller, Virtual Assistant,
                    etc.
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="job-title"
                    name="job-title"
                    type="text"
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                    required
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  City{" "}
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Write your city
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="city"
                    name="city"
                    type="text"
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="country"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Country{" "}
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Write your country
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="country"
                    name="country"
                    type="text"
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                    required
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="website-link"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Your Website
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Add your business website link here
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="website-link"
                    name="website-link"
                    type="text"
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                    value={websiteLink}
                    onChange={(e) => setWebsiteLink(e.target.value)}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="facebook-link"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Your Facebook Page
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Add the link to your Facebook Business Page here
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="facebook-link"
                    name="facebook-link"
                    type="text"
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                    value={facebookLink}
                    onChange={(e) => setFacebookLink(e.target.value)}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="facebook-group-link"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Your Facebook Group
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Add the link to your Facebook Group here
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="facebook-group-link"
                    name="facebook-group-link"
                    type="text"
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                    value={facebookGroupLink}
                    onChange={(e) => setFacebookGroupLink(e.target.value)}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="twitter-link"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Your Twitter Profile
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Add the link to your Twitter profile here
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="twitter-link"
                    name="twitter-link"
                    type="text"
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                    value={twitterLink}
                    onChange={(e) => setTwitterLink(e.target.value)}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="instagram-link"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Your Instagram Profile
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Add the link to your business Instagram profile here
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="instagram-link"
                    name="instagram-link"
                    type="text"
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                    value={instagramLink}
                    onChange={(e) => setInstagramLink(e.target.value)}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="pinterest-link"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Your Pinterest Page
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Add the link to your business Pinterest profile here
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="pinterest-link"
                    name="pinterest-link"
                    type="text"
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                    value={pinterestLink}
                    onChange={(e) => setPinterestLink(e.target.value)}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="tiktok-link"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Your TikTok Profile
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Add the link to your business TikTok profile here
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="tiktok-link"
                    name="tiktok-link"
                    type="text"
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                    value={tiktokLink}
                    onChange={(e) => setTiktokLink(e.target.value)}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="linkedin-link"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Your LinkedIn Profile
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Add the link to your LinkedIn profile here
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="linkedin-link"
                    name="linkedin-link"
                    type="text"
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                    value={linkedinLink}
                    onChange={(e) => setLinkedinLink(e.target.value)}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="freebie-link"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Your Freebie
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Add the link to your Freebie here (such as a PDF guide,
                    checklist that you are giving away in order to build your
                    email list)
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="freebie-link"
                    name="freebie-link"
                    type="text"
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                    value={freebieLink}
                    onChange={(e) => setFreebieLink(e.target.value)}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="other-link"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Other Important Link
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Add any other relevant link here
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="other-link"
                    name="other-link"
                    type="text"
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                    value={otherLink}
                    onChange={(e) => setOtherLink(e.target.value)}
                  />
                </div>
              </div>

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="bio"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Bio
                  <p className="mt-2 text-sm text-gray-400">
                    Let people know a little bit about you! Max 500 characters.
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <textarea
                    id="bio"
                    name="bio"
                    rows={3}
                    className="max-w-lg shadow-sm block w-full focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    max={500}
                  />
                </div>
              </div>

              {/* <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
              <label
                htmlFor="profile-picture"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Profile picture (Optional)
                <p className="mt-1 max-w-2xl text-sm text-gray-400">
                  Upload an avatar/business logo for your profile. Size: 800 X
                  800px (Square). We recommend using an avatar which you can
                  create for free on canva -
                  https://www.canva.com/create/avatars/.
                </p>
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  id="profile-picture"
                  name="profile-picture"
                  type="file"
                  className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                  required
                  onChange={(event) => setProfilePicture(event.target.files[0])}
                />
              </div>
            </div> */}

              <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:pt-5">
                <label
                  htmlFor="cover-image"
                  className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
                >
                  Cover image
                  <p className="mt-1 max-w-2xl text-sm text-gray-400">
                    Upload a cover image for your profile. Size: 8000 X 1960px.
                    Visit our member directory to see examples of good cover
                    images. Your cover image can serve as a banner advertisement
                    for your business.
                  </p>
                </label>
                <div className="mt-1 sm:mt-0 sm:col-span-2">
                  <input
                    id="cover-image"
                    name="cover-image"
                    type="file"
                    className="block max-w-lg w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm border border-gray-300 rounded-md"
                    onChange={(event) => setCoverImage(event.target.files[0])}
                  />
                </div>
              </div>
            </div>
            <div className="pt-5">
              <div className="flex justify-end">
                <Link
                  href="/"
                  className="bg-white py-2 px-4 border border-gray-300 rounded-full shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                  Cancel
                </Link>
                <button
                  type="submit"
                  className="ml-3 inline-flex justify-center py-2 px-4 border-2 border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-black hover:bg-white hover:text-black hover:border-2 border-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
                >
                  Create
                </button>
              </div>
            </div>
          </form>
        )}
        {success && (
          <div>
            Success! Please wait a few minutes, then check out your profile page{" "}
            <span className="font-bold">
              <Link href={`/profiles/${walletAddress}`}>here</Link>
            </span>
          </div>
        )}

        {!isConnected && (
          <section className="flex flex-col items-start py-8">
            <p className="mb-4">
              Please connect your wallet to create a profile.
            </p>
            <ConnectButton />
          </section>
        )}
      </section>
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const profiles = await table.select({}).firstPage();
    return {
      props: {
        initialProfiles: minifyProfiles(profiles),
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

//         const txn = await profileContract.createNewProfile(profileDataCID);
//         setLoading(true);
//         console.log("Minting...", txn.hash);
//         let wait = await txn.wait();
//         console.log("Minted -- ", txn.hash);

//         //   setProfileID(wait.profiles[0].args[0]);

//         setSuccess(true);
//         setLoading(false);
//         setMessage(
//           "Your profile has been created successfully. Please note that it may take a few minutes to appear on the home page."
//         );
//         setTimeout(() => {
//           router.push("/");
//         }, 5000);
// } else {
//         console.log("Error getting contract.");
//       }
//     } catch (error) {
//       setSuccess(false);
//       setMessage(
//         `There was an error creating your profile: ${error.message}`
//       );
//       setLoading(false);
//       console.log(error);
//     }
//   }
//   console.log("Form submitted");
// }
