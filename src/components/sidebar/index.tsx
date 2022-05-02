import { useNavigate } from "react-router";
import { useAppDispatch } from "../../store/hooks";
import { remove } from "../../store/reducers/user";
import LogoApp from "../commons/logo";
import { IcBaselineSpaceDashboard } from "../icons/dashboard";
import { IcBaselineLogout } from "../icons/logout";
import { IcBaselineAnalytics } from "../icons/scan";

export default function SideBar() {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(remove());
  };

  return (
    <aside className="w-64" aria-label="Sidebar">
      <div className="min-h-screen py-4 overflow-y-auto bg-gray-50 dark:bg-gradient-to-b from-mt-black-500 to-mt-navy-500">
        <div className="pb-2">
          <LogoApp
            to="/dashboard"
            className="flex items-center justify-start ml-1 cursor-pointer dark:text-slate-300"
          />
        </div>

        <ul className="space-y-2">
          <li>
            <div
              onClick={() => navigate("/dashboard")}
              className="flex items-center p-2 text-base font-normal cursor-pointer text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-mt-black-300">
              <IcBaselineSpaceDashboard className="flex-shrink-0 w-6 h-6 transition duration-75 text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white" />
              <span className="ml-3">Dashboard</span>
            </div>
          </li>

          {/* <li>
            <div className="flex items-center p-2 text-base font-normal cursor-pointer text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-mt-black-300">
              <FluentBookContacts24Filled className="flex-shrink-0 w-6 h-6 transition duration-75 text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white" />
              <span className="flex-1 ml-3 whitespace-nowrap">My Contacts</span>
            </div>
          </li> */}

          <li>
            <div
              onClick={() => navigate("/scan")}
              className="flex items-center p-2 text-base font-normal cursor-pointer text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-mt-black-300">
              <IcBaselineAnalytics className="flex-shrink-0 w-6 h-6 transition duration-75 text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white" />
              <span className="flex-1 ml-3 whitespace-nowrap">Analytics</span>
            </div>
          </li>

          <li>
            <div
              onClick={handleSignOut}
              className="flex items-center p-2 text-base font-normal cursor-pointer text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-mt-black-300">
              <IcBaselineLogout className="flex-shrink-0 w-6 h-6 transition duration-75 text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white" />
              <span className="flex-1 ml-3 whitespace-nowrap">Log Out</span>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
}
