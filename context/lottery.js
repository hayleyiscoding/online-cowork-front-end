import { createContext, useState } from "react";
import { ethers } from "ethers";
import { useProvider } from "wagmi";
import lotteryABI from "../constants/lotteryABI.json";

const LotteryContext = createContext();

const LotteryProvider = ({ children }) => {
  const provider = useProvider();
  const [lotteryContract, setLotteryContract] = useState(null);
  const [lotteryState, setLotteryState] = useState(null);

  const getLotteryContract = () => {
    console.log("address:", process.env.NEXT_PUBLIC_LOTTERY_CONTRACT);
    const lotteryContractInstance = new ethers.Contract(
      process.env.NEXT_PUBLIC_LOTTERY_CONTRACT,
      lotteryABI,
      provider
    );
    setLotteryContract(lotteryContractInstance);
  };

  const getLotteryState = async () => {
    try {
      const balance = await lotteryContract.getBalance();
      const entranceFee = await lotteryContract.getEntranceFee();
      const interval = await lotteryContract.getInterval();
      const players = await lotteryContract.getPlayers();
      const recentWinners = await lotteryContract.getRecentWinners();
      const lotteryStatus = await lotteryContract.getLotteryState();
      const numberOfWinners = await lotteryContract.getNumberOfWinners();
      const numberOfPlayers = await lotteryContract.getNumberOfPlayers();
      const withdrawPercentageForWinner =
        await lotteryContract.getWithdrawPercentageForWinner();
      const withdrawPercentageForOwner =
        await lotteryContract.getWithdrawPercentageForOwner();
      setLotteryState({
        balance,
        entranceFee,
        interval,
        players,
        recentWinners,
        lotteryStatus,
        numberOfWinners,
        numberOfPlayers,
        withdrawPercentageForWinner,
        withdrawPercentageForOwner,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LotteryContext.Provider
      value={{
        lotteryContract,
        setLotteryContract,
        getLotteryContract,
        lotteryState,
        setLotteryState,
        getLotteryState,
      }}
    >
      {children}
    </LotteryContext.Provider>
  );
};

export { LotteryContext, LotteryProvider };
