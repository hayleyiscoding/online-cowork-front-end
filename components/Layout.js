import Navbar from "./Navbar";
import Footer from "./Footer";
import { GiPartyPopper } from "react-icons/gi";

const Layout = ({ children }) => {
  return (
    <div className="font-nunito flex flex-col min-h-screen font-light">
      <div className="mb-2 flex items-center justify-center text-center p-1 bg-blend-soft-light  bg-gradient-to-r from-[#7928ca] to-[#ff0080]">
        <h3 className="text-white text-sm ">
          A huge congrats to last week's winner: 0x02389...1234 (~ USD 200.80){" "}
        </h3>{" "}
        {/* {account.slice(0, 6)}...
                            {account.slice(account.length - 4)} */}
        <div className="text-white p-1">
          <GiPartyPopper size={"2em"} />
        </div>
      </div>
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
