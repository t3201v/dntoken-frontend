import { toast } from "react-toastify";
import MCard from "../../../components/commons/card";
import { useAppSelector } from "../../../store/hooks";

export default function MyTokenBalance({ balance }: { balance?: number } = {}) {
  const user = useAppSelector((s) => s.user);

  return (
    <MCard props={{ className: "p-6" }}>
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-200">My Tokens Value</h5>
      <p className="font-semibold text-gray-700 dark:text-slate-200">{`DNC ${balance?.toFixed(2) || "0.00"}`}</p>
      <div className="font-semibold text-gray-700 dark:text-slate-200">
        My public address:
        <div
          onClick={() => {
            window.navigator.clipboard.writeText(user.addr);
            toast.success("*Copied");
          }}
          className="inline-block ml-1">
          {user.addr}
        </div>
      </div>
    </MCard>
  );
}
