import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export default function useCurrentUser() {
  const [currentUser, setCurrentUser] = useState(null);
  const { data: account } = useAccount();

  useEffect(() => {
    async function main() {
      if (account?.address) {
        try {
          const userInfo = await fetch(
            `/api/verifyUser?address=${account.address}`
          ).then((res) => res.json());
          setCurrentUser(userInfo);
        } catch {
          console.log("SOmething went wrong!");
        }
      }
    }
    main();
  }, [account]);
  return currentUser;
}
