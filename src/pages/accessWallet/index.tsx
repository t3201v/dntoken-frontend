import { useNavigate } from "react-router";
import ImportWallet from "./importWallet";

export default function AccessWallet() {
  const navigate = useNavigate();

  return (
    <div className="relative flex items-center justify-center overflow-hidden bg-purple-400 h-screen-9/10 dark:bg-mt-black-400">
      <div className="absolute z-10 hidden transform rotate-45 bg-purple-300 dark:bg-mt-black-300 w-60 h-60 rounded-xl top-5 -left-16 md:block" />
      <div className="absolute hidden w-48 h-48 transform bg-purple-300 dark:bg-mt-black-300 rounded-xl -bottom-6 -right-10 rotate-12 md:block" />

      <div className="z-10 px-12 py-12 bg-white shadow-xl dark:bg-mt-black-500 rounded-2xl">
        <ImportWallet />

        <div className="pt-6 text-center dark:text-slate-500">
          Don't have a wallet?{" "}
          <span onClick={() => navigate("/create/wallet")} className="underline cursor-pointer">
            Create a wallet
          </span>
        </div>
      </div>
      <div className="absolute z-10 hidden w-40 h-40 bg-purple-300 rounded-full dark:bg-mt-black-300 -top-5 right-12 md:block"></div>
      <div className="absolute hidden w-20 h-40 transform rotate-45 bg-purple-300 rounded-full dark:bg-mt-black-300 -z-0 bottom-20 left-10 md:block"></div>
    </div>
  );
}
