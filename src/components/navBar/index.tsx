import { useNavigate } from "react-router";
import LogoApp from "../commons/logo";
import { IcOutlineClose } from "../icons/close";
import { IcBaselineMenu } from "../icons/menu";

export default function NavBar() {
  const navigate = useNavigate();

  return (
    <nav className="w-full border-b dark:border-b-mt-black-500 dark:bg-mt-black-500 dark:text-white">
      <div className="container flex items-center justify-between px-6 py-5 mx-auto md:py-0">
        <LogoApp />

        <div>
          <button className="text-gray-500 dark:text-slate-200 sm:block md:hidden hover:text-gray-700 hover:dark:text-slate-50 focus:text-gray-700 focus:dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:dark:ring-slate-200">
            <IcBaselineMenu />
          </button>
          <div id="menu" className="hidden md:block lg:block">
            <button className="fixed top-0 z-30 block mt-6 text-gray-500 dark:text-slate-300 md:hidden lg:hidden hover:text-gray-700 hover:dark:text-slate-50 focus:text-gray-700 focus:dark:text-slate-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:dark:ring-slate-200">
              <IcOutlineClose />
            </button>

            <ul className="fixed top-0 bottom-0 left-0 right-0 z-20 flex flex-col items-center justify-center py-10 text-3xl bg-white md:text-base md:flex md:flex-row md:relative md:bg-transparent">
              <li
                onClick={() => navigate("/scan")}
                className="pt-10 text-base text-gray-700 cursor-pointer dark:text-slate-300 hover:text-gray-900 hover:dark:text-slate-50 lg:text-lg md:pt-0">
                <div>Analytics</div>
              </li>
            </ul>
          </div>
        </div>
        <button
          onClick={() => navigate("/access/wallet")}
          className="hidden px-4 py-1 text-sm text-indigo-700 transition duration-150 ease-in-out bg-transparent border border-indigo-700 rounded dark:border-mt-pink-500 dark:text-mt-pink-500 focus:outline-none lg:text-lg lg:font-bold focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:dark:ring-mt-pink-500 md:block hover:bg-gray-200 hover:dark:bg-mt-black-200 sm:px-8 sm:py-3">
          Access My Wallet
        </button>
      </div>
    </nav>
  );
}
