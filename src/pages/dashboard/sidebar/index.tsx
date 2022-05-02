import LogoApp from "../../../components/commons/logo";

export default function SideBar() {
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
            <div className="flex items-center p-2 text-base font-normal cursor-pointer text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-mt-black-300">
              <svg
                className="w-6 h-6 transition duration-75 text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span className="ml-3">Dashboard</span>
            </div>
          </li>

          <li>
            <div className="flex items-center p-2 text-base font-normal cursor-pointer text-slate-900 dark:text-white hover:bg-gray-100 dark:hover:bg-mt-black-300">
              <svg
                className="flex-shrink-0 w-6 h-6 transition duration-75 text-slate-500 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
              <span className="flex-1 ml-3 whitespace-nowrap">My Contacts</span>
            </div>
          </li>
        </ul>
      </div>
    </aside>
  );
}
