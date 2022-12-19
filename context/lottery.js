import { createContext, useState } from "react";
import { ethers } from "ethers";
import { toast } from "react-toastify";

const LotteryContext = createContext();

const LotteryProvider = ({ children }) => {
  const [lotteryContract, setLotteryContract] = useState(null);
  const [lotteryState, setLotteryState] = useState(null);

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
        balance: ethers.utils.formatEther(balance),
        entranceFee: ethers.utils.formatEther(entranceFee),
        interval: parseInt(interval),
        players,
        recentWinners,
        lotteryStatus,
        numberOfWinners,
        numberOfPlayers,
        withdrawPercentageForWinner,
        withdrawPercentageForOwner,
      });
    } catch (error) {
      toast.warn("Something went wrong! 😕");
      console.log(error);
    }
  };

  const listenLotteryEvents = () => {
    lotteryContract.on("PlayerEnteredToLottery", (player) => {
      console.log("PlayerEnteredToLottery:", player);
      toast.info(`One Player Entered to Lottery: ${player}`, {
        autoClose: 5000,
      });
      getLotteryState();
    });
    lotteryContract.on("WinnerPicked", (winner) => {
      console.log("WinnerPicked:", winner);
      toast.success(`Winner Picked: ${winner}`, { autoClose: 5000 });
      getLotteryState();
    });
    lotteryContract.on("WithdrawnFund", (someone, amount) => {
      console.log("WithdrawnFund:", someone);
      toast.info(
        `Withdrawn Fund to: ${someone} with ${ethers.utils.formatEther(
          amount
        )}`,
        { autoClose: 5000 }
      );
      getLotteryState();
    });
  };

  return (
    <LotteryContext.Provider
      value={{
        lotteryContract,
        setLotteryContract,
        lotteryState,
        setLotteryState,
        getLotteryState,
        listenLotteryEvents,
      }}
    >
      {children}
    </LotteryContext.Provider>
  );
};

export { LotteryContext, LotteryProvider };
