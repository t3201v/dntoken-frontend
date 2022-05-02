import MCard from "../commons/card";
import { Transaction } from "../types";
import TxItem from "./txItem";

export default function TransactionHistory({ tx }: { tx: Transaction[] }) {
  return (
    <MCard>
      <div>
        <div className="p-6 border-b border-b-gray-200 dark:border-b-mt-black-300">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-slate-200">
            Latest Transactions
          </h5>
        </div>

        <div className="overflow-y-scroll dark max-h-96">
          {tx?.map((t, i) => (
            <div
              key={i}
              className="px-6 py-1 border-b bg-gray-50 border-b-gray-200 dark:border-b-mt-black-300 hover:bg-gray-200 dark:bg-inherit hover:dark:bg-mt-black-300">
              <TxItem t={t} />
            </div>
          ))}
        </div>
      </div>
    </MCard>
  );
}
