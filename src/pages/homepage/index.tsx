import { useNavigate } from "react-router";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 bg-no-repeat bg-cover h-screen-9/10 dark:bg-mt-black-500 dark:bg-landing">
      <div className="container flex flex-col items-center py-12 mx-auto sm:py-24">
        <div className="flex-col items-center justify-center w-11/12 mb-5 sm:w-2/3 lg:flex sm:mb-10">
          <h1 className="text-2xl font-black leading-7 text-center text-gray-800 dark:text-slate-50 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl md:leading-10">
            <span className="text-indigo-700 dark:text-mt-purple-500">Deez Nuts' </span>
            Original Wallet
          </h1>
          <p className="mt-5 text-sm font-normal text-center text-gray-400 dark:text-slate-300 sm:mt-10 lg:w-10/12 sm:text-lg">
            DNW (DeezNutsWallet) is a free, client-side interface helping you interact with the blockchain. Our
            easy-to-use, open-source platform allows you to generate wallets, <s>interact with smart contracts</s>, and
            so much more.
          </p>
        </div>
        <div className="flex items-center justify-center">
          <button
            onClick={() => navigate("/create/wallet")}
            className="px-4 py-2 text-sm text-white transition duration-150 ease-in-out bg-indigo-700 border border-indigo-700 rounded dark:border-mt-purple-500 dark:bg-mt-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:dark:ring-mt-purple-500 hover:bg-indigo-600 hover:dark:bg-mt-purple-200 lg:text-xl lg:font-bold sm:px-10 sm:py-4">
            Create A New Wallet
          </button>
          <button
            onClick={() => navigate("/access/wallet")}
            className="px-4 py-2 ml-4 text-sm text-indigo-700 transition duration-150 ease-in-out bg-transparent border border-indigo-700 rounded dark:text-mt-purple-500 dark:border-mt-purple-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:dark:ring-mt-purple-500 hover:border-indigo-600 hover:dark:border-mt-purple-200 lg:text-xl lg:font-bold hover:text-indigo-600 hover:dark:text-mt-purple-200 sm:px-10 sm:py-4">
            Access My Wallet
          </button>
        </div>
      </div>
    </div>
  );
}
