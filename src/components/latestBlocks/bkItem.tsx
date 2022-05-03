import moment from "moment";
import { useAppSelector } from "../../store/hooks";
import { IBlock } from "../types";

export default function BkItem({ b }: { b: IBlock }) {
  const user = useAppSelector((s) => s.user);

  return (
    <div className="grid grid-cols-7">
      <div className="col-span-2">
        <div className="flex items-center p-1">
          <div className="flex items-center justify-center w-8 h-8 text-sm bg-gray-200 rounded">Bk</div>

          <div className="flex flex-col px-1 mx-1 dark:text-slate-400">
            <div className="text-blue-500 truncate w-28 hover:text-blue-300 hover:dark:text-mt-pink-600 dark:text-mt-pink-800">
              {b.index}
            </div>
            <div className="text-xs dark:text-slate-500">{moment(new Date(b.timestamp)).fromNow()}</div>
          </div>
        </div>
      </div>

      <div className="col-span-4">
        <div className="flex flex-col items-start justify-center p-1 text-slate-400">
          <div className="flex items-center justify-start">
            Miner:
            {user.addr === b.miner ? (
              <div className="inline-block ml-1 font-semibold text-orange-500 truncate hover:text-orange-300 w-52">
                Me
              </div>
            ) : (
              <div className="inline-block ml-1 text-blue-500 truncate hover:text-blue-300 w-52 hover:dark:text-mt-pink-600 dark:text-mt-pink-800">
                {b.miner}
              </div>
            )}
          </div>
          <div className="flex items-center justify-start">
            <div className="inline-block mr-1 text-blue-500 truncate hover:text-blue-300 hover:dark:text-mt-pink-600 dark:text-mt-pink-800">
              {b.txns}
            </div>
            txns
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center text-blue-500 truncate hover:text-blue-300 hover:dark:text-mt-pink-200 dark:text-mt-pink-400">
        {`${b.total?.toFixed(2)} DNC`}
      </div>
    </div>
  );
}
