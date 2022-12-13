import LandingProfiles from "../components/LandingProfiles";
import { useContext, useEffect, useState } from "react";
import ProfileCard from "../components/ProfileCard";
import { table, minifyProfiles } from "../utils/AirtableProfiles";
import { ProfilesContext } from "../context/profiles";

export default function Members({ initialProfiles }) {
  const [filteredProfiles, setFilteredProfiles] = useState([]);
  const [searchText, setSearchText] = useState("");

  const { profiles, setProfiles } = useContext(ProfilesContext);

  // const [currentTimestamp, setCurrentTimestamp] = useState(
  //   new Date().getTime().toString()
  // );

  function searchInputHandler(e) {
    setSearchText(e.target.value);
  }

  function updateFilteredProfiles() {
    console.log(data?.profiles, "hello");
    if (data?.profiles) {
      if (!searchText) {
        setFilteredProfiles(data.profiles);
      } else {
        setFilteredProfiles(
          data.profiles.filter((profile) =>
            profile.name.toLowerCase().includes(searchText.toLowerCase())
          )
        );
      }
    }
  }

  useEffect(() => {
    updateFilteredProfiles();
  }, [searchText, data]);

  if (loading)
    return (
      <LandingProfiles>
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
      </LandingProfiles>
    );
  if (error)
    return (
      <LandingProfiles>
        <p>`Error! ${error.message}`</p>
      </LandingProfiles>
    );

  return (
    <LandingProfiles>
      <div className="flex justify-start pt-4 pb-6">
        <div className="mb-3 xl:w-96">
          <div className="input-group relative flex items-stretch w-full mb-4">
            <input
              type="search"
              className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-black focus:outline-none"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="button-addon2"
              onChange={searchInputHandler}
              value={searchText}
            />
          </div>
        </div>
      </div>
      <ul
        role="list"
        className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
      >
        {filteredProfiles.map((profile) => (
          <li key={profile.walletAddress}>
            <ProfileCard id={profile.walletAddress} profile={profile} />
          </li>
        ))}
      </ul>
    </LandingProfiles>
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
