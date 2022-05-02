import moment from "moment";
import { Transaction } from ".";

export default function TxItem({ amount, from, to, timestamp }: Transaction) {
  return (
    <div className="grid grid-cols-7">
      <div className="col-span-2">
        <div className="flex items-center p-1">
          <div className="flex items-center justify-center w-8 h-8 text-sm bg-gray-200 rounded-full">Tx</div>

          <div className="flex flex-col px-1 mx-1 dark:text-slate-400">
            <div className="w-32 text-blue-500 truncate hover:text-blue-300 hover:dark:text-mt-pink-600 dark:text-mt-pink-800">
              {from}
            </div>
            <div className="text-xs dark:text-slate-500">{moment(new Date(timestamp)).fromNow()}</div>
          </div>
        </div>
      </div>

      <div className="col-span-4">
        <div className="flex flex-col items-start justify-center p-1 text-slate-400">
          <div className="flex items-center justify-start">
            from:
            <div className="inline-block ml-1 text-blue-500 truncate hover:text-blue-300 w-52 hover:dark:text-mt-pink-600 dark:text-mt-pink-800">
              {from}
            </div>
          </div>
          <div className="flex items-center justify-start">
            to:
            <div className="inline-block ml-1 text-blue-500 truncate hover:text-blue-300 w-52 hover:dark:text-mt-pink-600 dark:text-mt-pink-800">
              {to}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center text-blue-500 truncate hover:text-blue-300 hover:dark:text-mt-pink-200 dark:text-mt-pink-400">{`${amount.toFixed(
        2
      )} DNC`}</div>
    </div>
  );
}
