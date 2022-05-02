import { useNavigate } from "react-router";
import IcBig404 from "../../components/icons/big404";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-screen-9/10 dark:bg-mt-black-700">
        <div className="w-7/12">
          <IcBig404 />
        </div>

        <div onClick={() => navigate("/")} className="text-2xl underline cursor-pointer hover:dark:text-slate-300 dark:text-slate-500 hover:text-gray-700">
          Return Home
        </div>
      </div>
    </div>
  );
}
