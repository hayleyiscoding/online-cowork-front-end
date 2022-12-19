import { useEffect, useState } from "react";
import { useAccount } from "wagmi";

export default function useCurrentUser() {
  const [currentUser, setCurrentUser] = useState(null);
  const { data: account } = useAccount();

  useEffect(() => {
    if (account?.address) {
      fetch(`/api/verifyUser?address=${account.address}`)
        .then((res) => res.json())
        .then((user) => setCurrentUser(user));
    }
  }, [account]);
  return currentUser;
}
